import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Happy Birthday Milly!",
  description: "created by your loving nephew!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
