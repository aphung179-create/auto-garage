import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Calendar,
  ChevronRight,
  PhoneCall,
  Droplets,
  Gauge,
  Snowflake,
  Cpu,
  Sparkles,
  Users,
  Car,
  Headphones
} from "lucide-react";

const servicesList = [
  {
    id: "bao-duong",
    name: "Bảo Dưỡng Định Kỳ",
    icon: ShieldCheck,
    price: "Từ 500.000đ",
    duration: "60 phút",
    desc: "Kiểm tra toàn diện 30 hạng mục khung gầm, động cơ và hệ thống vận hành theo số km tiêu chuẩn.",
    points: ["Kiểm tra khung gầm & lốp", "Xiết ốc gầm theo lực chuẩn", "Bổ sung nước làm mát, rửa kính"]
  },
  {
    id: "thay-dau",
    name: "Thay Dầu & Lọc Động Cơ",
    icon: Droplets,
    price: "Từ 800.000đ",
    duration: "30 phút",
    desc: "Sử dụng dầu động cơ tổng hợp chính hãng cao cấp, bảo vệ động cơ vận hành êm ái, bền bỉ.",
    points: ["Dầu động cơ chính hãng", "Thay cốc lọc dầu mới", "Vệ sinh lọc gió động cơ"]
  },
  {
    id: "he-thong-phanh",
    name: "Kiểm Tra Hệ Thống Phanh",
    icon: Gauge,
    price: "Từ 350.000đ",
    duration: "45 phút",
    desc: "Kiểm tra độ mòn má phanh, láng đĩa phanh điện tử, thay dầu phanh đảm bảo an toàn tuyệt đối.",
    points: ["Đo độ dày má phanh", "Vệ sinh cùm phanh & đĩa", "Kiểm tra dầu phanh & ABS"]
  },
  {
    id: "dieu-hoa",
    name: "Bảo Dưỡng Điều Hòa",
    icon: Snowflake,
    price: "Từ 450.000đ",
    duration: "60 phút",
    desc: "Khử khuẩn nội thất bằng ozone, vệ sinh dàn lạnh nội soi và nạp ga điều hòa chính xác theo áp suất.",
    points: ["Vệ sinh dàn lạnh nội soi", "Khử mùi diệt khuẩn sinh học", "Nạp thêm ga R134a/1234yf"]
  },
  {
    id: "he-thong-dien",
    name: "Chẩn Đoán Điện Ô Tô",
    icon: Cpu,
    price: "Từ 400.000đ",
    duration: "60 phút",
    desc: "Quét lỗi hệ thống điện tử ECU bằng máy đọc lỗi chuyên dụng, phát hiện chính xác mọi lỗi ngầm.",
    points: ["Quét mã lỗi ECU chuyên sâu", "Kiểm tra ắc quy & máy phát", "Hiệu chuẩn cảm biến an toàn"]
  },
  {
    id: "can-thuoc-lai",
    name: "Cân Mâm & Thước Lái",
    icon: Wrench,
    price: "Từ 600.000đ",
    duration: "45 phút",
    desc: "Cân chỉnh góc đặt bánh xe 3D bằng công nghệ laser mới nhất, tránh mòn vẹt lốp và rung lắc tay lái.",
    points: ["Cân chỉnh độ chụm 3D", "Cân mâm bấm chì điện tử", "Kiểm tra hệ thống rotuyn lái"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Tiếp Nhận & Đăng Ký",
    desc: "Cố vấn dịch vụ tiếp nhận xe, lắng nghe yêu cầu và ghi nhận tình trạng thực tế cùng khách hàng."
  },
  {
    step: "02",
    title: "Chẩn Đoán & Báo Giá",
    desc: "Kỹ thuật viên kiểm tra chi tiết, gửi phiếu kiểm tra kỹ thuật và báo giá minh bạch trước khi làm."
  },
  {
    step: "03",
    title: "Tiến Hành Sửa Chữa",
    desc: "Thực hiện bảo dưỡng, thay thế linh kiện chính hãng dưới sự giám sát chặt chẽ theo quy trình kỹ thuật."
  },
  {
    step: "04",
    title: "Kiểm Tra KCS & Bàn Giao",
    desc: "Chạy thử, vệ sinh sạch sẽ, xuất hóa đơn và phiếu bảo hành điện tử bàn giao cho quý khách."
  }
];

const whyChooseData = [
  {
    icon: Award,
    title: "Thiết Bị Chẩn Đoán Hiện Đại",
    desc: "Hệ thống máy quét mã lỗi ECU và cầu nâng đạt chuẩn châu Âu giúp bắt đúng bệnh, sửa đúng điểm."
  },
  {
    icon: ShieldCheck,
    title: "Linh Kiện Chính Hãng 100%",
    desc: "Mọi phụ tùng thay thế đều có nguồn gốc xuất xứ rõ ràng, tem bảo hành chính hãng từ nhà sản xuất."
  },
  {
    icon: Sparkles,
    title: "Báo Giá Minh Bạch",
    desc: "Tuyệt đối không phát sinh chi phí ngoài dự kiến nếu chưa có sự đồng thuận từ quý khách hàng."
  },
  {
    icon: Headphones,
    title: "Cứu Hộ & Hỗ Trợ 24/7",
    desc: "Đội ngũ kỹ thuật lưu động sẵn sàng hỗ trợ kích ắc quy, thay lốp dự phòng và cẩu kéo xe 24/7."
  }
];

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              <span>Hệ Thống Garage Chăm Sóc Xe Đạt Chuẩn 5 Sao</span>
            </div>

            <h1 className="hero-title">
              Chăm Sóc & Sửa Chữa Ô Tô <span className="highlight">Chuyên Nghiệp</span> Tận Tâm
            </h1>

            <p className="hero-description">
              Quy trình tiêu chuẩn, phụ tùng chính hãng 100%, trang thiết bị chẩn đoán hiện đại bậc nhất.
              Chúng tôi cam kết mang lại sự an tâm tuyệt đối trên từng cây số cho xế yêu của bạn.
            </p>

            <div className="hero-actions">
              <Link href="/booking" className="btn btn-primary" style={{ padding: "14px 28px" }}>
                <Calendar size={18} />
                <span>Đặt Lịch Bảo Dưỡng Ngay</span>
              </Link>
              <Link href="/services" className="btn btn-outline-white" style={{ padding: "14px 28px" }}>
                <span>Xem Dịch Vụ & Bảng Giá</span>
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="hero-guarantees">
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>Bảo hành tới 12 tháng</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>Linh kiện chính hãng 100%</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>Kiểm tra 30 hạng mục miễn phí</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Widget Preview */}
          <div className="hero-widget-card">
            <div className="widget-badge">
              <Sparkles size={13} />
              <span>Gara Đang Hoạt Động</span>
            </div>
            <h3 className="widget-title">Trung Tâm Điều Hành Dịch Vụ</h3>
            <p className="widget-desc">
              Hệ thống quản lý tiếp nhận xe theo thời gian thực tại AutoCare Garage.
            </p>

            <div className="widget-status-list">
              <div className="status-row">
                <div className="status-left">
                  <div className="status-icon-box">
                    <Car size={18} />
                  </div>
                  <div>
                    <div className="status-name">Toyota Camry (30F-982.11)</div>
                    <div className="status-sub">Khoang 01 • Bảo dưỡng cấp lớn</div>
                  </div>
                </div>
                <span className="status-pill active">Đang xử lý</span>
              </div>

              <div className="status-row">
                <div className="status-left">
                  <div className="status-icon-box">
                    <Droplets size={18} />
                  </div>
                  <div>
                    <div className="status-name">Mazda CX-5 (29A-654.89)</div>
                    <div className="status-sub">Khoang 02 • Thay dầu nhớt Castrol</div>
                  </div>
                </div>
                <span className="status-pill ready">Hoàn tất KCS</span>
              </div>

              <div className="status-row">
                <div className="status-left">
                  <div className="status-icon-box">
                    <Wrench size={18} />
                  </div>
                  <div>
                    <div className="status-name">Mercedes C200 (30H-123.45)</div>
                    <div className="status-sub">Khoang 03 • Cân chỉnh thước lái 3D</div>
                  </div>
                </div>
                <span className="status-pill active">Đang kiểm tra</span>
              </div>
            </div>

            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#94a3b8" }}>Khung giờ còn trống hôm nay: <strong>5 khoang</strong></span>
              <Link href="/booking" style={{ fontSize: "13px", color: "#38bdf8", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                Giữ chỗ ngay <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <Clock size={24} />
              </div>
              <div>
                <div className="stat-number">10+ Năm</div>
                <div className="stat-label">Kinh nghiệm chuyên môn</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Car size={24} />
              </div>
              <div>
                <div className="stat-number">15.000+</div>
                <div className="stat-label">Lượt xe đã phục vụ</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Phụ tùng chính hãng</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div>
                <div className="stat-number">4.9 / 5 ⭐</div>
                <div className="stat-label">Khách hàng hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Dịch vụ hàng đầu</span>
            <h2 className="section-title">Hạng Mục Sửa Chữa & Bảo Dưỡng</h2>
            <p className="section-subtitle">
              Đáp ứng trọn vẹn mọi yêu cầu chăm sóc xe ô tô từ các dòng xe phổ thông tới xe cao cấp với tiêu chuẩn kỹ thuật khắt khe.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <article key={service.id} className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <IconComponent size={26} />
                    </div>
                    <span className="service-duration-badge">{service.duration}</span>
                  </div>

                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-desc">{service.desc}</p>

                  <ul className="service-highlights">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="service-highlight-item">
                        <CheckCircle2 size={15} className="highlight-check" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-bottom">
                    <div className="service-price-block">
                      <span className="service-price-label">Giá tham khảo</span>
                      <span className="service-price-value">{service.price}</span>
                    </div>

                    <Link href="/booking" className="service-link">
                      <span>Đặt hẹn</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW SECTION */}
      <section className="section workflow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quy trình làm việc</span>
            <h2 className="section-title">4 Bước Bảo Dưỡng Chuẩn Kỹ Thuật</h2>
            <p className="section-subtitle">
              Minh bạch từng công đoạn, quý khách hàng hoàn toàn có thể theo dõi tiến độ sửa chữa trực tiếp hoặc qua hệ thống.
            </p>
          </div>

          <div className="steps-grid">
            {processSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cam kết dịch vụ</span>
            <h2 className="section-title">Tại Sao Nên Chọn AutoCare Garage?</h2>
            <p className="section-subtitle">
              Sự hài lòng và an toàn của bạn cùng chiếc xe là tôn chỉ hoạt động hàng đầu của chúng tôi.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseData.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="why-card">
                  <div className="why-icon">
                    <IconComp size={24} />
                  </div>
                  <h4 className="why-title">{item.title}</h4>
                  <p className="why-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2 className="cta-title">Xế Yêu Của Bạn Đã Đến Kỳ Bảo Dưỡng?</h2>
              <p className="cta-desc">
                Đặt lịch hẹn trực tuyến ngay hôm nay để nhận gói <strong>kiểm tra toàn diện 30 hạng mục an toàn</strong> hoàn toàn miễn phí và không mất thời gian chờ đợi.
              </p>
            </div>
            <div className="cta-buttons">
              <Link href="/booking" className="btn btn-accent" style={{ padding: "14px 28px" }}>
                <Calendar size={18} />
                <span>Đặt Lịch Hẹn Ngay</span>
              </Link>
              <a href="tel:19008888" className="btn btn-outline-white" style={{ padding: "14px 24px" }}>
                <PhoneCall size={18} />
                <span>Hotline: 1900 8888</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
