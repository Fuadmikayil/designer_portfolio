import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuad Mikayılov Portfolio",
  description: "Fuad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-scroll border-[22px] hide-scrollbar border-[#EDEDED]">
          {children}
        </div>
      </body>
    </html>
  );
}
