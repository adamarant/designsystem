'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Drawer, Field, Flex, Help, Input, Label, Select, Stack, Textarea, Toggle } from '@adamarant/ds-react';
import { useEditor } from '../EditorContext.js';
function isRecord(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}
const asString = (v) => (typeof v === 'string' ? v : '');
/**
 * Auto-generated control for one top-level field. The reducer only ever sees a
 * whole-field write (`localized: false`): the value handed to it is the raw,
 * still-localized shape, and `FieldWidget` handles locale collapse/merge and
 * nested (object/list) composition internally. This keeps the reducer pure and
 * unaware of the field tree's depth.
 */
export function FieldControl({ blockId, fieldKey, field }) {
    const { state, dispatch } = useEditor();
    const block = state.document.blocks.find((b) => b.id === blockId);
    const raw = block?.data[fieldKey];
    const onChange = (v) => dispatch({ type: 'updateField', blockId, key: fieldKey, value: v, localized: false });
    return (_jsxs(Field, { children: [_jsx(Label, { children: field.label ?? fieldKey }), _jsx(FieldWidget, { field: field, value: raw, onChange: onChange, locale: state.locale }), field.help ? _jsx(Help, { children: field.help }) : null] }));
}
/**
 * Renders the editing UI for any field given its raw value + an onChange, with no
 * reducer coupling — so objects and lists compose by nesting FieldWidget and
 * rebuilding the container value on each edit.
 */
function FieldWidget({ field, value, onChange, locale }) {
    if (field.type === 'object') {
        const obj = isRecord(value) ? value : {};
        return (_jsx(Stack, { gap: "sm", className: "dsb-fieldgroup", children: Object.entries(field.fields).map(([key, sub]) => (_jsxs(Field, { children: [_jsx(Label, { children: sub.label ?? key }), _jsx(FieldWidget, { field: sub, value: obj[key], onChange: (v) => onChange({ ...obj, [key]: v }), locale: locale }), sub.help ? _jsx(Help, { children: sub.help }) : null] }, key))) }));
    }
    if (field.type === 'list') {
        return _jsx(ListWidget, { field: field, value: value, onChange: onChange, locale: locale });
    }
    // Localized leaf: show the active locale, merge it back into the locale map.
    if (field.localized) {
        const shown = isRecord(value) ? value[locale] : value;
        const write = (v) => onChange({ ...(isRecord(value) ? value : {}), [locale]: v });
        return _jsx(LeafWidget, { field: field, value: shown, onChange: write });
    }
    return _jsx(LeafWidget, { field: field, value: value, onChange: onChange });
}
/** A repeater of items conforming to `field.of` — scalar or object. */
function ListWidget({ field, value, onChange, locale }) {
    const { labels } = useEditor();
    const of = field.type === 'list' ? field.of : null;
    const items = Array.isArray(value) ? value : [];
    const setItems = (next) => onChange(next);
    const update = (index, next) => setItems(items.map((it, i) => (i === index ? next : it)));
    const removeAt = (index) => setItems(items.filter((_, i) => i !== index));
    const move = (index, delta) => {
        const to = index + delta;
        if (to < 0 || to >= items.length)
            return;
        const next = [...items];
        [next[index], next[to]] = [next[to], next[index]];
        setItems(next);
    };
    const add = () => of && setItems([...items, newItemValue(of)]);
    return (_jsxs(Stack, { gap: "sm", children: [items.map((item, i) => (_jsxs("div", { className: "dsb-listitem", children: [_jsxs(Flex, { gap: "2", align: "center", justify: "between", children: [_jsx("span", { className: "dsb-listitem__idx", children: i + 1 }), _jsxs(Flex, { gap: "1", align: "center", children: [_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => move(i, -1), disabled: i === 0, children: labels.moveUp }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => move(i, 1), disabled: i === items.length - 1, children: labels.moveDown }), _jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeAt(i), children: labels.remove })] })] }), of ? (_jsx(FieldWidget, { field: of, value: item, onChange: (v) => update(i, v), locale: locale })) : null] }, i))), _jsx("div", { children: _jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: add, disabled: !of, children: labels.addItem }) })] }));
}
/** A fresh, empty value for a new list item — the renderer fills field defaults. */
function newItemValue(of) {
    switch (of.type) {
        case 'object':
            return {};
        case 'image':
        case 'link':
            return null;
        case 'boolean':
            return false;
        case 'number':
            return 0;
        default:
            return '';
    }
}
/** The concrete input for a scalar/media field, keyed off its descriptor type. */
function LeafWidget({ field, value, onChange }) {
    const { labels, renderImagePicker } = useEditor();
    const [pickerOpen, setPickerOpen] = useState(false);
    switch (field.type) {
        case 'text':
            return field.multiline ? (_jsx(Textarea, { value: asString(value), onChange: (e) => onChange(e.target.value) })) : (_jsx(Input, { value: asString(value), onChange: (e) => onChange(e.target.value) }));
        case 'richtext':
            return _jsx(Textarea, { rows: 5, value: asString(value), onChange: (e) => onChange(e.target.value) });
        case 'number':
            return (_jsx(Input, { type: "number", value: typeof value === 'number' ? value : '', onChange: (e) => onChange(e.target.value === '' ? undefined : Number(e.target.value)) }));
        case 'boolean':
            return _jsx(Toggle, { checked: value === true, onCheckedChange: (c) => onChange(c) });
        case 'select':
            return (_jsx(Select, { value: asString(value), onChange: (e) => onChange(e.target.value), children: field.options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }));
        case 'colorToken':
            return field.tokens && field.tokens.length > 0 ? (_jsx(Select, { value: asString(value), onChange: (e) => onChange(e.target.value), children: field.tokens.map((t) => (_jsx("option", { value: t, children: t }, t))) })) : (_jsx(Input, { value: asString(value), onChange: (e) => onChange(e.target.value) }));
        case 'link': {
            const link = (isRecord(value) ? value : {});
            return (_jsxs(Stack, { gap: "sm", children: [_jsx(Input, { placeholder: labels.linkHref, value: asString(link.href), onChange: (e) => onChange({ ...link, href: e.target.value }) }), _jsx(Input, { placeholder: labels.linkLabel, value: asString(link.label), onChange: (e) => onChange({ ...link, label: e.target.value }) })] }));
        }
        case 'image': {
            const image = isRecord(value) ? value : null;
            return (_jsxs(Stack, { gap: "sm", children: [image?.url ? _jsx("img", { className: "dsb-field__thumb", src: image.url, alt: image.alt ?? '' }) : null, _jsxs(Flex, { gap: "2", children: [renderImagePicker ? (_jsx(Button, { type: "button", variant: "secondary", size: "sm", onClick: () => setPickerOpen(true), children: image?.url ? labels.changeImage : labels.chooseImage })) : (_jsx(Input, { placeholder: labels.imageUrl, value: asString(image?.url), onChange: (e) => onChange(e.target.value ? { url: e.target.value } : null) })), image?.url ? (_jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => onChange(null), children: labels.removeImage })) : null] }), renderImagePicker ? (_jsx(Drawer, { open: pickerOpen, onClose: () => setPickerOpen(false), side: "right", children: _jsx(Drawer.Body, { children: renderImagePicker({
                                value: image,
                                onSelect: (img) => {
                                    onChange(img);
                                    setPickerOpen(false);
                                },
                                onClose: () => setPickerOpen(false),
                            }) }) })) : null] }));
        }
        default:
            return null;
    }
}
//# sourceMappingURL=FieldControl.js.map