import "./globals.css";
import Navbar from "@/components/nav.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  title: "BrandName E-commerce",
  description: "The best e-commerce site for BrandName",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
