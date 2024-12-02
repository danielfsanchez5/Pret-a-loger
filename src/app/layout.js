import localFont from "next/font/local";
import "./globals.css";
import Topbar from './topbar';
import Downbar from "./downbar";

export const metadata = {
  title: "Prêt-à-loger",
  description: "The modular shelter solution by Daniel Sánchez",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {children}
        <Downbar />
      </body>
    </html>
  );
}

export default RootLayout;