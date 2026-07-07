'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Drawer, Field, Flex, Help, Input, Label, Select, Stack, Textarea, Toggle } from '@adamarant/ds-react';
import { useEditor } from '../EditorContext.js';
function isRecord(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
/** Read/write one field's value for the active locale via the editor reducer. */
function useFieldValue(blockId, fieldKey, field) {
    const { state, dispatch } = useEditor();
    const block = state.document.blocks.find((b) => b.id === blockId);
    const raw = block?.data[fieldKey];
    // lists are not localized in the MVP; everything else honours `localized`
    const localized = Boolean(field.localized) && field.type !== 'list';
    const value = localized && isRecord(raw) ? raw[state.locale] : raw;
    const setValue = (v) => dispatch({ type: 'updateField', blockId, key: fieldKey, value: v, localized });
    return { value, setValue, locale: state.locale };
}
const asString = (v) => (typeof v === 'string' ? v : '');
/** Auto-generated control for a single field, chosen by its descriptor type. */
export function FieldControl({ blockId, fieldKey, field }) {
    const { value, setValue } = useFieldValue(blockId, fieldKey, field);
    const { labels, renderImagePicker } = useEditor();
    const [pickerOpen, setPickerOpen] = useState(false);
    const label = field.label ?? fieldKey;
    let control;
    switch (field.type) {
        case 'text':
            control = field.multiline ? (_jsx(Textarea, { value: asString(value), onChange: (e) => setValue(e.target.value) })) : (_jsx(Input, { value: asString(value), onChange: (e) => setValue(e.target.value) }));
            break;
        case 'richtext':
            control = _jsx(Textarea, { rows: 5, value: asString(value), onChange: (e) => setValue(e.target.value) });
            break;
        case 'number':
            control = (_jsx(Input, { type: "number", value: typeof value === 'number' ? value : '', onChange: (e) => setValue(e.target.value === '' ? undefined : Number(e.target.value)) }));
            break;
        case 'boolean':
            control = _jsx(Toggle, { checked: value === true, onCheckedChange: (c) => setValue(c) });
            break;
        case 'select':
            control = (_jsx(Select, { value: asString(value), onChange: (e) => setValue(e.target.value), children: field.options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }));
            break;
        case 'colorToken':
            control =
                field.tokens && field.tokens.length > 0 ? (_jsx(Select, { value: asString(value), onChange: (e) => setValue(e.target.value), children: field.tokens.map((t) => (_jsx("option", { value: t, children: t }, t))) })) : (_jsx(Input, { value: asString(value), onChange: (e) => setValue(e.target.value) }));
            break;
        case 'link': {
            const link = (isRecord(value) ? value : {});
            control = (_jsxs(Stack, { gap: "sm", children: [_jsx(Input, { placeholder: labels.linkHref, value: asString(link.href), onChange: (e) => setValue({ ...link, href: e.target.value }) }), _jsx(Input, { placeholder: labels.linkLabel, value: asString(link.label), onChange: (e) => setValue({ ...link, label: e.target.value }) })] }));
            break;
        }
        case 'image': {
            const image = isRecord(value) ? value : null;
            control = (_jsxs(Stack, { gap: "sm", children: [image?.url ? (_jsx("img", { className: "dsb-field__thumb", src: image.url, alt: image.alt ?? '' })) : null, _jsxs(Flex, { gap: "2", children: [renderImagePicker ? (_jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: () => setPickerOpen(true), children: image?.url ? labels.changeImage : labels.chooseImage })) : (_jsx(Input, { placeholder: labels.imageUrl, value: asString(image?.url), onChange: (e) => setValue(e.target.value ? { url: e.target.value } : null) })), image?.url ? (_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => setValue(null), children: labels.removeImage })) : null] }), renderImagePicker ? (_jsx(Drawer, { open: pickerOpen, onClose: () => setPickerOpen(false), side: "right", children: _jsx(Drawer.Body, { children: renderImagePicker({
                                value: image,
                                onSelect: (img) => {
                                    setValue(img);
                                    setPickerOpen(false);
                                },
                                onClose: () => setPickerOpen(false),
                            }) }) })) : null] }));
            break;
        }
        case 'list':
            control = _jsx(ListControl, { blockId: blockId, fieldKey: fieldKey, field: field });
            break;
        default:
            control = null;
    }
    return (_jsxs(Field, { children: [_jsx(Label, { children: label }), control, field.help ? _jsx(Help, { children: field.help }) : null] }));
}
/** Minimal repeater for a list of scalar items (MVP: string-like `of`). */
function ListControl({ blockId, fieldKey, field }) {
    const { value, setValue } = useFieldValue(blockId, fieldKey, field);
    const { labels } = useEditor();
    const items = Array.isArray(value) ? value : [];
    const of = field.type === 'list' ? field.of : null;
    const update = (index, next) => setValue(items.map((it, i) => (i === index ? next : it)));
    const add = () => setValue([...items, '']);
    const removeAt = (index) => setValue(items.filter((_, i) => i !== index));
    return (_jsxs(Stack, { gap: "sm", children: [items.map((item, i) => (_jsxs(Flex, { gap: "2", align: "center", children: [_jsx(Input, { value: asString(item), onChange: (e) => update(i, e.target.value) }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeAt(i), children: labels.remove })] }, i))), _jsx("div", { children: _jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: add, disabled: !of, children: labels.addItem }) })] }));
}
//# sourceMappingURL=FieldControl.js.map