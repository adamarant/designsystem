'use client'

import { useState } from 'react'
import { Button, Drawer, Field, Flex, Help, Input, Label, Select, Stack, Textarea, Toggle } from '@adamarant/ds-react'
import type { Field as FieldDescriptor, ImageValue, LinkValue } from '../../schema/fields.js'
import { useEditor } from '../EditorContext.js'

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

const asString = (v: unknown): string => (typeof v === 'string' ? v : '')

interface ControlProps {
  blockId: string
  fieldKey: string
  field: FieldDescriptor
}

/**
 * Auto-generated control for one top-level field. The reducer only ever sees a
 * whole-field write (`localized: false`): the value handed to it is the raw,
 * still-localized shape, and `FieldWidget` handles locale collapse/merge and
 * nested (object/list) composition internally. This keeps the reducer pure and
 * unaware of the field tree's depth.
 */
export function FieldControl({ blockId, fieldKey, field }: ControlProps) {
  const { state, dispatch } = useEditor()
  const block = state.document.blocks.find((b) => b.id === blockId)
  const raw = block?.data[fieldKey]
  const onChange = (v: unknown) =>
    dispatch({ type: 'updateField', blockId, key: fieldKey, value: v, localized: false })

  return (
    <Field>
      <Label>{field.label ?? fieldKey}</Label>
      <FieldWidget field={field} value={raw} onChange={onChange} locale={state.locale} />
      {field.help ? <Help>{field.help}</Help> : null}
    </Field>
  )
}

interface WidgetProps {
  field: FieldDescriptor
  /** raw stored value: locale map for localized leaves, array for lists, object for objects */
  value: unknown
  onChange: (next: unknown) => void
  locale: string
}

/**
 * Renders the editing UI for any field given its raw value + an onChange, with no
 * reducer coupling — so objects and lists compose by nesting FieldWidget and
 * rebuilding the container value on each edit.
 */
function FieldWidget({ field, value, onChange, locale }: WidgetProps) {
  if (field.type === 'object') {
    const obj = isRecord(value) ? value : {}
    return (
      <Stack gap="sm" className="dsb-fieldgroup">
        {Object.entries(field.fields).map(([key, sub]) => (
          <Field key={key}>
            <Label>{sub.label ?? key}</Label>
            <FieldWidget
              field={sub}
              value={obj[key]}
              onChange={(v) => onChange({ ...obj, [key]: v })}
              locale={locale}
            />
            {sub.help ? <Help>{sub.help}</Help> : null}
          </Field>
        ))}
      </Stack>
    )
  }

  if (field.type === 'list') {
    return <ListWidget field={field} value={value} onChange={onChange} locale={locale} />
  }

  // Localized leaf: show the active locale, merge it back into the locale map.
  if (field.localized) {
    const shown = isRecord(value) ? value[locale] : value
    const write = (v: unknown) => onChange({ ...(isRecord(value) ? value : {}), [locale]: v })
    return <LeafWidget field={field} value={shown} onChange={write} />
  }

  return <LeafWidget field={field} value={value} onChange={onChange} />
}

/** A repeater of items conforming to `field.of` — scalar or object. */
function ListWidget({ field, value, onChange, locale }: WidgetProps) {
  const { labels } = useEditor()
  const of = field.type === 'list' ? field.of : null
  const items: unknown[] = Array.isArray(value) ? value : []

  const setItems = (next: unknown[]) => onChange(next)
  const update = (index: number, next: unknown) =>
    setItems(items.map((it, i) => (i === index ? next : it)))
  const removeAt = (index: number) => setItems(items.filter((_, i) => i !== index))
  const move = (index: number, delta: number) => {
    const to = index + delta
    if (to < 0 || to >= items.length) return
    const next = [...items]
    ;[next[index], next[to]] = [next[to], next[index]]
    setItems(next)
  }
  const add = () => of && setItems([...items, newItemValue(of)])

  return (
    <Stack gap="sm">
      {items.map((item, i) => (
        <div key={i} className="dsb-listitem">
          <Flex gap="2" align="center" justify="between">
            <span className="dsb-listitem__idx">{i + 1}</span>
            <Flex gap="1" align="center">
              <Button type="button" variant="ghost" size="sm" onClick={() => move(i, -1)} disabled={i === 0}>
                {labels.moveUp}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
              >
                {labels.moveDown}
              </Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => removeAt(i)}>
                {labels.remove}
              </Button>
            </Flex>
          </Flex>
          {of ? (
            <FieldWidget field={of} value={item} onChange={(v) => update(i, v)} locale={locale} />
          ) : null}
        </div>
      ))}
      <div>
        <Button type="button" variant="secondary" size="sm" onClick={add} disabled={!of}>
          {labels.addItem}
        </Button>
      </div>
    </Stack>
  )
}

/** A fresh, empty value for a new list item — the renderer fills field defaults. */
function newItemValue(of: FieldDescriptor): unknown {
  switch (of.type) {
    case 'object':
      return {}
    case 'image':
    case 'link':
      return null
    case 'boolean':
      return false
    case 'number':
      return 0
    default:
      return ''
  }
}

interface LeafProps {
  field: FieldDescriptor
  /** single-locale, plain value */
  value: unknown
  onChange: (next: unknown) => void
}

/** The concrete input for a scalar/media field, keyed off its descriptor type. */
function LeafWidget({ field, value, onChange }: LeafProps) {
  const { labels, renderImagePicker } = useEditor()
  const [pickerOpen, setPickerOpen] = useState(false)

  switch (field.type) {
    case 'text':
      return field.multiline ? (
        <Textarea value={asString(value)} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <Input value={asString(value)} onChange={(e) => onChange(e.target.value)} />
      )

    case 'richtext':
      return <Textarea rows={5} value={asString(value)} onChange={(e) => onChange(e.target.value)} />

    case 'number':
      return (
        <Input
          type="number"
          value={typeof value === 'number' ? value : ''}
          onChange={(e) => onChange(e.target.value === '' ? undefined : Number(e.target.value))}
        />
      )

    case 'boolean':
      return <Toggle checked={value === true} onCheckedChange={(c) => onChange(c)} />

    case 'select':
      return (
        <Select value={asString(value)} onChange={(e) => onChange(e.target.value)}>
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      )

    case 'colorToken':
      return field.tokens && field.tokens.length > 0 ? (
        <Select value={asString(value)} onChange={(e) => onChange(e.target.value)}>
          {field.tokens.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      ) : (
        <Input value={asString(value)} onChange={(e) => onChange(e.target.value)} />
      )

    case 'link': {
      const link = (isRecord(value) ? value : {}) as Partial<LinkValue>
      return (
        <Stack gap="sm">
          <Input
            placeholder={labels.linkHref}
            value={asString(link.href)}
            onChange={(e) => onChange({ ...link, href: e.target.value })}
          />
          <Input
            placeholder={labels.linkLabel}
            value={asString(link.label)}
            onChange={(e) => onChange({ ...link, label: e.target.value })}
          />
        </Stack>
      )
    }

    case 'image': {
      const image = isRecord(value) ? (value as unknown as ImageValue) : null
      return (
        <Stack gap="sm">
          {image?.url ? <img className="dsb-field__thumb" src={image.url} alt={image.alt ?? ''} /> : null}
          <Flex gap="2">
            {renderImagePicker ? (
              <Button type="button" variant="secondary" size="sm" onClick={() => setPickerOpen(true)}>
                {image?.url ? labels.changeImage : labels.chooseImage}
              </Button>
            ) : (
              <Input
                placeholder={labels.imageUrl}
                value={asString(image?.url)}
                onChange={(e) => onChange(e.target.value ? { url: e.target.value } : null)}
              />
            )}
            {image?.url ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => onChange(null)}>
                {labels.removeImage}
              </Button>
            ) : null}
          </Flex>
          {renderImagePicker ? (
            <Drawer open={pickerOpen} onClose={() => setPickerOpen(false)} side="right">
              <Drawer.Body>
                {renderImagePicker({
                  value: image,
                  onSelect: (img) => {
                    onChange(img)
                    setPickerOpen(false)
                  },
                  onClose: () => setPickerOpen(false),
                })}
              </Drawer.Body>
            </Drawer>
          ) : null}
        </Stack>
      )
    }

    default:
      return null
  }
}
