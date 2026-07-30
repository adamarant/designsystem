import "../../../dist/designsystem.css";
import "@/styles/demo.css";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/Sidebar";

/* riccardo's typeface, adopted here on 31 Jul 2026 in place of Clash Display
   + Switzer. Inter variable with the optical-size axis: large headings get
   Inter's Display cut and body text the Text cut automatically, via
   font-optical-sizing (auto, the browser default). One family for both roles,
   differentiated by optics rather than by loading a second face — the same
   move riccardo makes in its own layout, and the same one the reference this
   was modelled on (brand.s25.studio) makes with a single Diatype.
   globals.css maps --ds-font-display onto it. */
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Design System — React Components",
  description: "Interactive component documentation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="demo-layout">
            <Sidebar />
            <main className="demo-main">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
