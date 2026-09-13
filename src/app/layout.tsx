import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/home.css";
import "@/styles/footer.css";
import "@/styles/booking.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AutoCare Garage - Hệ Thống Chăm Sóc & Sửa Chữa Ô Tô Chuẩn 5 Sao",
  description:
    "Trung tâm dịch vụ bảo dưỡng, sửa chữa ô tô chuyên nghiệp, uy tín hàng đầu. Đặt lịch online nhanh chóng, linh kiện chính hãng 100%, bảo hành lên đến 12 tháng.",
  keywords: [
    "gara ô tô",
    "bảo dưỡng ô tô",
    "sửa chữa xe hơi",
    "thay dầu nhớt",
    "cân chỉnh thước lái",
    "autocare garage"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
