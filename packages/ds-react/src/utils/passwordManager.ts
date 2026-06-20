/**
 * Attributes that ask the major password managers (1Password, LastPass,
 * Bitwarden, Dashlane) NOT to attach their inline autofill button to a field.
 *
 * Spread onto any NON-credential input so managers stay out of search boxes,
 * content fields, settings, filters, etc.:
 *
 *   import { ignorePasswordManagers } from "@adamarant/ds-react";
 *   <input className="ds-input" {...ignorePasswordManagers} />
 *
 * The ds-react <Input>, <Textarea> and <Search.Input> apply this BY DEFAULT.
 * On a real sign-in field, opt back in with the `allowPasswordManager` prop and
 * set the proper autoComplete ("username" / "current-password" / "one-time-code").
 *
 * Note: these target the managers' overlay only. They do NOT disable the
 * browser's own autofill for addresses/payment — use the right autoComplete
 * values (e.g. "street-address", "postal-code") for those.
 */
export const ignorePasswordManagers = {
  autoComplete: "off",
  "data-1p-ignore": "",
  "data-lpignore": "true",
  "data-bwignore": "",
  "data-form-type": "other",
} as const;
