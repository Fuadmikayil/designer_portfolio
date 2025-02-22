import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <div className="h-screen overflow-scroll border-[22px] hide-scrollbar border-[#EDEDED] ">
          <Header />

          <div className="container">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
