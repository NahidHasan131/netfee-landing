import { Poppins, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { I18nProvider }  from "./providers/I18nProvider";
import Navbar            from "./components/Navbar";
import Footer            from "./components/Footer";
import ScrollToTop       from "./components/ScrollToTop";

/* ─ Fonts ─ */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700", "800"],
  display:  "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets:  ["bengali"],
  weight:   ["300", "400", "500", "600", "700"],
  display:  "swap",
});

export const metadata = {
  title: "NetFee ISP Billing Software",
  description: "The ultimate ISP business management software. Available in Bengali and English with powerful automation features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${poppins.variable} ${hindSiliguri.variable} h-full antialiased`}
      suppressHydrationWarning >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <ScrollToTop />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
