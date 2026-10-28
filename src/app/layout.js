import "./globals.css";
import Header from "@/app/componets/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Addis Eats",
    template: "%s | Addis Eats",
  },
  description:
    "Discover and order Ethiopian dishes from Addis Eats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}