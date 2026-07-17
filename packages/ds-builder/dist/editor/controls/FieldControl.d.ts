import type { Field as FieldDescriptor } from '../../schema/fields.js';
interface ControlProps {
    blockId: string;
    fieldKey: string;
    field: FieldDescriptor;
}
/**
 * Auto-generated control for one top-level field. The reducer only ever sees a
 * whole-field write (`localized: false`): the value handed to it is the raw,
 * still-localized shape, and `FieldWidget` handles locale collapse/merge and
 * nested (object/list) composition internally. This keeps the reducer pure and
 * unaware of the field tree's depth.
 */
export declare function FieldControl({ blockId, fieldKey, field }: ControlProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FieldControl.d.ts.map