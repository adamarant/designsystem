import type { Registry } from '../registry/createRegistry.js';
import type { PageDocument } from '../types/page.js';
import { type BlockIssue } from '../validate/validateDocument.js';
import { type ImagePickerRenderer } from './EditorContext.js';
import { type EditorLabels } from './labels.js';
export interface PageEditorProps {
    /** the consumer's block registry */
    registry: Registry;
    /** the page's current draft document */
    document: PageDocument;
    /** persist the draft (wire to an API route that calls the page store) */
    onSaveDraft: (doc: PageDocument) => Promise<void>;
    /** publish the page (wire to an API route that validates + publishes) */
    onPublish: (doc: PageDocument) => Promise<void>;
    /** called when publish is blocked by validation errors */
    onInvalid?: (issues: BlockIssue[]) => void;
    /** wire to the CMS MediaPicker (or any picker); falls back to a URL input */
    renderImagePicker?: ImagePickerRenderer;
    /** admin UI label overrides (default English) */
    labels?: Partial<EditorLabels>;
    /** debounce before autosaving a draft (ms). Default 1200 */
    autosaveMs?: number;
    /** locale to edit first. Default: document.defaultLocale */
    initialLocale?: string;
}
/**
 * The page editor: a live canvas plus a schema-driven property panel, with
 * debounced draft autosave and a validated publish. Persistence is injected
 * (`onSaveDraft` / `onPublish`) so this component stays free of transport + auth.
 */
export declare function PageEditor({ registry, document, onSaveDraft, onPublish, onInvalid, renderImagePicker, labels, autosaveMs, initialLocale, }: PageEditorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PageEditor.d.ts.map