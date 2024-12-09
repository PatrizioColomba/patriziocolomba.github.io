import type { Metadata } from "next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/space-mono";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/400-italic.css";

export const metadata: Metadata = {
  title: "patriziocolomba.github.io",
  description: "Patrizio Colomba on GitHub Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
