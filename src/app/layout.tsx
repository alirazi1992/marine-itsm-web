import type { Metadata } from "next";
import "./globals.css";
import { UserSettingsProvider } from "@/contexts/UserSettingsContext";

export const metadata: Metadata = {
  title: "Marine ITSM",
  description: "Marine-focused IT Service Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      {/* put utilities here instead of @apply in CSS */}
      <body className="antialiased text-white">
        <UserSettingsProvider>{children}</UserSettingsProvider>
      </body>
    </html>
  );
}
