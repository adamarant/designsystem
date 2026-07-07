'use client'

import { useState } from 'react'
import { Button, Drawer, Field, Flex, Help, Input, Label, Select, Stack, Textarea, Toggle } from '@adamarant/ds-react'
import type { Field as FieldDescriptor, ImageValue, LinkValue } from '../../schema/fields.js'
import { useEditor } from '../EditorContext.js'

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

interface ControlProps {
  blockId: string
  fieldKey: string
  field: FieldDescriptor
}

/** Read/write one field's value for the active locale via the editor reducer. */
function useFieldValue(blockId: string, fieldKey: string, field: FieldDescriptor) {
  const { state, dispatch } = useEditor()
  const block = state.document.blocks.find((b) => b.id === blockId)
  const raw = block?.data[fieldKey]
  // lists are not localized in the MVP; everything else honours `localized`
  const localized = Boolean(field.localized) && field.type !== 'list'
  const value = localized && isRecord(raw) ? raw[state.locale] : raw
  const setValue = (v: unknown) =>
    dispatch({ type: 'updateField', blockId, key: fieldKey, value: v, localized })
  return { value, setValue, locale: state.locale }
}

const asString = (v: unknown): string => (typeof v === 'string' ? v : '')

/** Auto-generated control for a single field, chosen by its descriptor type. */
export function FieldControl({ blockId, fieldKey, field }: ControlProps) {
  const { value, setValue } = useFieldValue(blockId, fieldKey, field)
  const { labels, renderImagePicker } = useEditor()
  const [pickerOpen, setPickerOpen] = useState(false)
  const label = field.label ?? fieldKey

  let control: React.ReactNode

  switch (field.type) {
    case 'text':
      control = field.multiline ? (
        <Textarea value={asString(value)} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <Input value={asString(value)} onChange={(e) => setValue(e.target.value)} />
      )
      break

    case 'richtext':
      control = <Textarea rows={5} value={asString(value)} onChange={(e) => setValue(e.target.value)} />
      break

    case 'number':
      control = (
        <Input
          type="number"
          value={typeof value === 'number' ? value : ''}
          onChange={(e) => setValue(e.target.value === '' ? undefined : Number(e.target.value))}
        />
      )
      break

    case 'boolean':
      control = <Toggle checked={value === true} onCheckedChange={(c) => setValue(c)} />
      break

    case 'select':
      control = (
        <Select value={asString(value)} onChange={(e) => setValue(e.target.value)}>
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      )
      break

    case 'colorToken':
      control =
        field.tokens && field.tokens.length > 0 ? (
          <Select value={asString(value)} onChange={(e) => setValue(e.target.value)}>
            {field.tokens.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        ) : (
          <Input value={asString(value)} onChange={(e) => setValue(e.target.value)} />
        )
      break

    case 'link': {
      const link = (isRecord(value) ? value : {}) as Partial<LinkValue>
      control = (
        <Stack gap="sm">
          <Input
            placeholder={labels.linkHref}
            value={asString(link.href)}
            onChange={(e) => setValue({ ...link, href: e.target.value })}
          />
          <Input
            placeholder={labels.linkLabel}
            value={asString(link.label)}
            onChange={(e) => setValue({ ...link, label: e.target.value })}
          />
        </Stack>
      )
      break
    }

    case 'image': {
      const image = isRecord(value) ? (value as unknown as ImageValue) : null
      control = (
        <Stack gap="sm">
          {image?.url ? (
            <img className="dsb-field__thumb" src={image.url} alt={image.alt ?? ''} />
          ) : null}
          <Flex gap="2">
            {renderImagePicker ? (
              <Button type="button" variant="secondary" size="sm" onClick={() => setPickerOpen(true)}>
                {image?.url ? labels.changeImage : labels.chooseImage}
              </Button>
            ) : (
              <Input
                placeholder={labels.imageUrl}
                value={asString(image?.url)}
                onChange={(e) => setValue(e.target.value ? { url: e.target.value } : null)}
              />
            )}
            {image?.url ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => setValue(null)}>
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
                    setValue(img)
                    setPickerOpen(false)
                  },
                  onClose: () => setPickerOpen(false),
                })}
              </Drawer.Body>
            </Drawer>
          ) : null}
        </Stack>
      )
      break
    }

    case 'list':
      control = <ListControl blockId={blockId} fieldKey={fieldKey} field={field} />
      break

    default:
      control = null
  }

  return (
    <Field>
      <Label>{label}</Label>
      {control}
      {field.help ? <Help>{field.help}</Help> : null}
    </Field>
  )
}

/** Minimal repeater for a list of scalar items (MVP: string-like `of`). */
function ListControl({ blockId, fieldKey, field }: ControlProps) {
  const { value, setValue } = useFieldValue(blockId, fieldKey, field)
  const { labels } = useEditor()
  const items: unknown[] = Array.isArray(value) ? value : []
  const of = field.type === 'list' ? field.of : null

  const update = (index: number, next: unknown) =>
    setValue(items.map((it, i) => (i === index ? next : it)))
  const add = () => setValue([...items, ''])
  const removeAt = (index: number) => setValue(items.filter((_, i) => i !== index))

  return (
    <Stack gap="sm">
      {items.map((item, i) => (
        <Flex key={i} gap="2" align="center">
          <Input value={asString(item)} onChange={(e) => update(i, e.target.value)} />
          <Button type="button" variant="ghost" size="sm" onClick={() => removeAt(i)}>
            {labels.remove}
          </Button>
        </Flex>
      ))}
      <div>
        <Button type="button" variant="secondary" size="sm" onClick={add} disabled={!of}>
          {labels.addItem}
        </Button>
      </div>
    </Stack>
  )
}
