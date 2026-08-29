import { Bricolage_Grotesque, IBM_Plex_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const brand = Bricolage_Grotesque({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Hobbyside — 취향이 모이는 자리",
    template: "%s · Hobbyside",
  },
  description:
    "깊은 취미를 나누는 커뮤니티와, 나만의 비밀 기록을 남기는 일기장.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#efe4dc",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${brand.variable} ${display.variable} ${body.variable} h-full`}
    >
      <body className="site-bg grain body-shell">
        <Header />
        <div className="app-shell">{children}</div>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
