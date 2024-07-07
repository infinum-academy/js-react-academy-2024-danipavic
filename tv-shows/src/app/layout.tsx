import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TV Shows app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  );
}
