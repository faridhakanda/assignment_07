import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FriendProvider from "@/context/FriendContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assignment-07 with vercel deploy!",
  description: "Assignment_07 with vercel deploy using typescript in nextjs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FriendProvider>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    {children}
                </div>
                
                <div>
                    <Footer />
                </div>
            </div>
            <ToastContainer />
        </FriendProvider>
        
    </body>
    </html>
  );
}
