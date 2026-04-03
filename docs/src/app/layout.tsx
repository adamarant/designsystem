import "@digiko-npm/designsystem";
import "@/styles/demo.css";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "Design System — React Components",
  description: "Interactive component documentation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="demo-layout">
            <Sidebar />
            <main className="demo-main">
              <div className="demo-topbar">
                <ThemeToggle />
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
