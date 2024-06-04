// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenFlag",
  description: "Your one stop shop for F1 content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
