import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{ template:"%s | James Choong", default:"James Choong"},
  description: "Computer Science student at UOW Malaysia KDU Penang. Building backend systems and AI-powered tools.",
  openGraph:{
    title:"James Choong — Portfolio",
    description: "Computer Science student at KDU Penang. Building backend systems and AI-powered tools.",
    url: "https://choongjuncheng.my",
    siteName: "James Choong",
     images: [
      {
        url: "/og_choongjuncheng.my.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  verification:{
    google:"KQsGbwGmluflWWz52cKpUZYgrJGMicKNylTBhZ-sGaY"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
