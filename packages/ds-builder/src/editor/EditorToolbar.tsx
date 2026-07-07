'use client'

import { Button, Flex, Select } from '@adamarant/ds-react'
import { useEditor } from './EditorContext.js'
import type { SaveStatus } from './reducer.js'

function statusText(status: SaveStatus, labels: ReturnType<typeof useEditor>['labels']): string {
  switch (status) {
    case 'saving':
      return labels.saving
    case 'saved':
      return labels.saved
    case 'error':
      return labels.saveError
    default:
      return ''
  }
}

interface EditorToolbarProps {
  onPublish: () => void
  publishing: boolean
}

/** Top bar: locale switch, save status, publish. */
export function EditorToolbar({ onPublish, publishing }: EditorToolbarProps) {
  const { state, dispatch, labels } = useEditor()
  const { locales } = state.document

  return (
    <Flex className="dsb-toolbar" align="center" justify="between" gap="4">
      <Flex align="center" gap="2">
        {locales.length > 1 ? (
          <label className="dsb-toolbar__locale">
            <span className="dsb-toolbar__locale-label">{labels.language}</span>
            <Select
              value={state.locale}
              onChange={(e) => dispatch({ type: 'setLocale', locale: e.target.value })}
            >
              {locales.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>
          </label>
        ) : null}
      </Flex>

      <Flex align="center" gap="3">
        <span className="dsb-toolbar__status" data-status={state.status}>
          {statusText(state.status, labels)}
        </span>
        <Button type="button" variant="primary" loading={publishing} onClick={onPublish}>
          {publishing ? labels.publishing : labels.publish}
        </Button>
      </Flex>
    </Flex>
  )
}
