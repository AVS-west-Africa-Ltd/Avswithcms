import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import { Urbanist, Khand } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Use string literals for weights
  variable: "--font-urbanist", // Ensure the variable is a string literal
});

const khand = Khand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Use string literals for weights
  variable: "--font-khand", // Ensure the variable is a string literal
});

export const metadata = {
  title: "A Venture Studio",
  description:
    "Welcome to A Venture Studio — your bridge to expertise for turning ideas into thriving businesses. We don't just understand your vision; we champion it. With a deep commitment to your success, we provide strategic guidance and empowerment to fuel the growth of your business.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${khand.variable} bg-black`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
