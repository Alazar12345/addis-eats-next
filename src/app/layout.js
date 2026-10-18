import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Ethiopian food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}