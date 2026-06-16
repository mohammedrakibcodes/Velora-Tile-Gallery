import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Velora",
  description: "Premium Tile Gallery Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
