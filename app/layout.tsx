// app/layout.tsx
import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { bodyFont, headingFont } from "@/lib/fonts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Synapse",
  description: "Tools that bring structure, speed, and focus to your work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
