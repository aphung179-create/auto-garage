import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight
} from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-grid">
          {/* Column 1: Brand & Commitment */}
          <div className="footer-col">
            <div className="footer-brand-title">
              <Wrench size={24} color="#3b82f6" />
              <span>AUTOCARE</span> GARAGE
            </div>
            <p className="footer-brand-desc">
              Trung tâm chăm sóc, bảo dưỡng và sửa chữa ô tô tiêu chuẩn cao.
              Ứng dụng công nghệ chẩn đoán hiện đại cùng đội ngũ kỹ thuật viên giàu kinh nghiệm.
            </p>
            <div className="footer-badge-list">
              <div className="footer-badge-item">
                <ShieldCheck size={16} />
                <span>Bảo hành dịch vụ và linh kiện lên đến 12 tháng</span>
              </div>
              <div className="footer-badge-item">
                <Award size={16} />
                <span>100% phụ tùng, dầu nhớt chính hãng có tem kiểm định</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Liên kết nhanh</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  <ChevronRight size={14} /> Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Dịch vụ sửa chữa
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <ChevronRight size={14} /> Đặt lịch hẹn trước
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <ChevronRight size={14} /> Khách hàng / Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <ChevronRight size={14} /> Quản trị viên (Admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Dịch vụ chính</h4>
            <ul className="footer-links">
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Bảo dưỡng định kỳ
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Thay dầu & lọc nhớt cao cấp
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Kiểm tra & bảo dưỡng phanh
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Vệ sinh & nạp ga điều hòa
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <ChevronRight size={14} /> Cân chỉnh thước lái vi tính
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Working Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Liên hệ & Giờ làm việc</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span>Số 128 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <span>Hotline cứu hộ: <strong>1900 8888</strong> (24/7)</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span>contact@autocaregarage.vn</span>
              </div>
            </div>

            <div className="footer-hours-box">
              <div className="footer-hours-label">
                <Clock size={14} style={{ display: "inline", marginRight: "6px" }} />
                Thời gian mở cửa:
              </div>
              <div className="footer-hours-time">Thứ 2 - Thứ 7: 07:30 - 18:30</div>
              <div className="footer-hours-time" style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>
                Chủ nhật: 08:00 - 16:30
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright">
            © {new Date().getFullYear()} AutoCare Garage. Tất cả các quyền được bảo lưu.
          </p>
          <div className="footer-bottom-links">
            <a href="#terms">Điều khoản sử dụng</a>
            <a href="#privacy">Chính sách bảo mật</a>
            <a href="#warranty">Chính sách bảo hành</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
