import type { PageDocument } from '../types/page.js'

/**
 * A stored page document (as it would live in Supabase). Note the localized
 * fields hold per-locale maps and include a locale — "ja" — the package knows
 * nothing about: adding a language is data, not a code change.
 */
export const samplePage: PageDocument = {
  schemaVersion: 1,
  defaultLocale: 'en',
  locales: ['en', 'ja'],
  blocks: [
    {
      id: 'b1',
      type: 'hero',
      version: 1,
      data: {
        overline: { en: 'Welcome', ja: 'ようこそ' },
        title: { en: 'Build pages, safely', ja: '安全にページを構築' },
        subtitle: {
          en: 'Edit text and images from the admin — no code.',
          ja: '管理画面からテキストと画像を編集。',
        },
        image: { url: 'https://example.com/bg.jpg', alt: 'Background' },
        cta: { href: '/contact', label: 'Get in touch' },
        align: 'center',
      },
    },
  ],
}
