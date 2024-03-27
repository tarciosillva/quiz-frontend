import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "frontend to Quiz app - Darwin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className="bg-cover bg-center h-screen bg-no-repeat overflow-auto"
          style={{
            backgroundImage: "url('./assets/background.svg')"
          }}
        >
          <div className="px-8 py-5 lg:px-24 lg:py-16">
            <Header />
            <div className="flex flex-col lg:grid grid-cols-2 gap-5">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
