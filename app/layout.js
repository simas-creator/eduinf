import "./globals.css";
import Nav from "/components/Nav";
import  Footer from "/components/Footer";
import { EdgeStoreProvider } from "../lib/edgestore";
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
});
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto",
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "Mokytojų bei dėstytojų įvertinimai",
  description: "EDUinf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body suppressHydrationWarning={true}
        className={`${montserrat.className} ${roboto.className} antialiased flex flex-col min-h-screen`}
      >
        <Nav />
        <main className="flex-grow">
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
