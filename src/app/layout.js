import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}