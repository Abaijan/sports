import { Header, Footer } from "./components";
import dynamic from "next/dynamic";

import "./globals.css";


export const metadata = {
  title: "Sportic Kg - Магазин Спортивной одежды",
  description: "Sportic Kg - Магазин Спортивной одежды в Кыргызстане",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body >
        <Header />
             {children}
        <Footer/>
      </body>
    </html>
  );
}
