import localFont from "next/font/local";
import "./globals.css";
import Nav from "/components/Nav";
import  Footer from "/components/Footer";
import { EdgeStoreProvider } from "../lib/edgestore";
import { Montserrat } from 'next/font/google';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Mokytojų bei dėstytojų įvertinimai",
  description: "EDUinf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <Nav />
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <Footer/>
      </body>
    </html>
  );
}
