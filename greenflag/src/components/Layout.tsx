// src/components/Layout.tsx
import { Inter } from "next/font/google";
import "../app/globals.css"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
