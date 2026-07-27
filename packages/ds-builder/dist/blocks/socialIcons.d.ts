/**
 * Brand glyphs for the contacts block.
 *
 * The design system deliberately ships no brand marks (lucide dropped them in
 * v1 and ds-react's SiteFooter takes `social` as a ReactNode the consumer
 * supplies). A block, though, renders itself from data alone: it has nowhere to
 * receive an icon from, so the six marks live here. Paths are the official
 * brand glyphs on a 24x24 viewBox.
 */
export declare const SOCIAL_NETWORKS: readonly [{
    readonly value: "facebook";
    readonly label: "Facebook";
}, {
    readonly value: "instagram";
    readonly label: "Instagram";
}, {
    readonly value: "youtube";
    readonly label: "YouTube";
}, {
    readonly value: "x";
    readonly label: "X";
}, {
    readonly value: "linkedin";
    readonly label: "LinkedIn";
}, {
    readonly value: "tiktok";
    readonly label: "TikTok";
}];
export type SocialNetwork = (typeof SOCIAL_NETWORKS)[number]['value'];
/** One brand glyph, sized like a lucide icon (`size` in px). */
export declare function SocialIcon({ network, size }: {
    network: SocialNetwork;
    size?: number;
}): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=socialIcons.d.ts.map