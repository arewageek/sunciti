import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/ui/nav/Navbar";
import { Footer } from "@/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mainone Energy & Engineering Ltd",
  description: "Mainone energy is a solar and electrical energy company that ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-700 font-barlow">

        <Navbar />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
