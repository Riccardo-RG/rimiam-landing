import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "RIMIAM - The luxury smart pendant that feels like presence",
  description: "Three simple gestures—trill, light, shared memory—wrapped in elegant design. The luxury hi-tech jewelry that connects you with the one you love, anywhere.",
  keywords: "luxury smart jewelry, connected pendant, couples jewelry, hi-tech jewelry, wearable technology, RIMIAM",
  authors: [{ name: "RIMIAM" }],
  creator: "RIMIAM",
  publisher: "RIMIAM",
  openGraph: {
    title: "RIMIAM - The luxury smart pendant that feels like presence",
    description: "Three simple gestures—trill, light, shared memory—wrapped in elegant design. The luxury hi-tech jewelry that connects you with the one you love, anywhere.",
    type: "website",
    locale: "en_US",
    siteName: "RIMIAM",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIMIAM - The luxury smart pendant that feels like presence",
    description: "Three simple gestures—trill, light, shared memory—wrapped in elegant design.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#e6b547",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
