import Link from "next/link";
import {
  ShieldCheck,
  Droplets,
  Gauge,
  Snowflake,
  Cpu,
  Sparkles,
  Calendar,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Dịch Vụ & Bảng Giá - AutoCare Garage",
  description: "Bảng giá và danh mục dịch vụ sửa chữa, bảo dưỡng ô tô chi tiết tại AutoCare Garage."
};

const fullServices = [
  {
    name: "Bảo Dưỡng Định Kỳ Tổng Thể",
    icon: ShieldCheck,
    price: "500.000đ - 1.500.000đ",
    duration: "60 - 90 phút",
    desc: "Kiểm tra toàn diện 30 hạng mục gầm, phanh, động cơ, chất lỏng theo số km tiêu chuẩn.",
    points: ["Kiểm tra khung gầm & lốp", "Xiết ốc gầm theo lực chuẩn", "Kiểm tra mức dầu, nước làm mát"]
  },
  {
    name: "Thay Dầu & Lọc Dầu Động Cơ",
    icon: Droplets,
    price: "800.000đ - 1.800.000đ",
    duration: "30 phút",
    desc: "Sử dụng dầu động cơ tổng hợp toàn phần nhập khẩu chính hãng (Mobil 1, Castrol, Motul).",
    points: ["Xả sạch dầu cũ bằng máy hút", "Thay cốc lọc dầu chính hãng", "Vệ sinh lọc gió động cơ & điều hòa"]
  },
  {
    name: "Kiểm Tra & Bảo Dưỡng Phanh",
    icon: Gauge,
    price: "300.000đ - 650.000đ",
    duration: "45 phút",
    desc: "Vệ sinh má phanh, láng đĩa phanh bằng máy tiện tự động, kiểm tra dầu phanh và cụm ABS.",
    points: ["Đo độ mòn đĩa & má phanh", "Láng phẳng đĩa phanh chống rung", "Bôi mỡ chịu nhiệt ắc phanh"]
  },
  {
    name: "Vệ Sinh & Nạp Ga Điều Hòa",
    icon: Snowflake,
    price: "450.000đ - 900.000đ",
    duration: "60 phút",
    desc: "Nội soi dàn lạnh, diệt khuẩn khử mùi điều hòa bằng công nghệ ozone và bổ sung ga lạnh chuẩn.",
    points: ["Nội soi làm sạch giàn lạnh", "Khử mùi diệt khuẩn sinh học", "Hút chân không & nạp ga chuẩn"]
  },
  {
    name: "Chẩn Đoán & Sửa Chữa Hệ Thống Điện",
    icon: Cpu,
    price: "350.000đ - 1.200.000đ",
    duration: "60 phút",
    desc: "Đọc và xóa mã lỗi ECU, kiểm tra máy phát điện, kiểm tra ắc quy và hệ thống cảm biến toàn xe.",
    points: ["Quét mã lỗi ECU chuyên sâu", "Đo kiểm dòng nạp máy phát", "Hiệu chuẩn các cảm biến an toàn"]
  },
  {
    name: "Chăm Sóc & Spa Xe Chi Tiết",
    icon: Sparkles,
    price: "700.000đ - 2.500.000đ",
    duration: "120 - 180 phút",
    desc: "Dọn nội thất chuyên sâu, giặt ghế da, tẩy ố kính, đánh bóng sơn và phủ ceramic bảo vệ bề mặt sơn.",
    points: ["Vệ sinh chi tiết khoang máy", "Dưỡng da nội thất cao cấp", "Tẩy ố kính & phủ nano chống bám nước"]
  }
];

export default function ServicesPage() {
  return (
    <main className="container" style={{ paddingTop: "60px", paddingBottom: "90px" }}>
      <div className="section-header">
        <span className="section-tag">Bảng giá niêm yết</span>
        <h1 className="section-title">Dịch Vụ Sửa Chữa & Bảo Dưỡng</h1>
        <p className="section-subtitle">
          Báo giá công khai, minh bạch. Tất cả dịch vụ đều có phiếu kiểm tra kỹ thuật và thời hạn bảo hành rõ ràng.
        </p>
      </div>

      <div className="services-grid">
        {fullServices.map((service) => {
          const IconComp = service.icon;
          return (
            <article key={service.name} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  <IconComp size={26} />
                </div>
                <span className="service-duration-badge">{service.duration}</span>
              </div>

              <h2 className="service-name">{service.name}</h2>
              <p className="service-desc">{service.desc}</p>

              <ul className="service-highlights">
                {service.points.map((p, i) => (
                  <li key={i} className="service-highlight-item">
                    <CheckCircle2 size={15} className="highlight-check" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-bottom">
                <div className="service-price-block">
                  <span className="service-price-label">Giá trọn gói từ</span>
                  <span className="service-price-value">{service.price}</span>
                </div>

                <Link href="/booking" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "13px" }}>
                  <Calendar size={14} />
                  <span>Đặt lịch</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
