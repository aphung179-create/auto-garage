import Link from "next/link";
import { Wrench, PhoneCall, Calendar, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo">
          <div className="brand-icon-box">
            <Wrench size={22} />
          </div>
          <div className="brand-text">
            <span className="brand-name">
              AUTOCARE <span>GARAGE</span>
            </span>
            <span className="brand-slogan">Dịch Vụ Ô Tô Chuẩn 5 Sao</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="main-nav" aria-label="Main Navigation">
          <Link href="/" className="nav-link">
            Trang chủ
          </Link>
          <Link href="/services" className="nav-link">
            Dịch vụ & Bảng giá
          </Link>
          <Link href="/booking" className="nav-link">
            Đặt lịch hẹn
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/admin" className="nav-link">
            Admin
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <a href="tel:19008888" className="hotline-pill">
            <div className="hotline-icon">
              <PhoneCall size={14} />
            </div>
            <div className="hotline-text">
              <span className="hotline-label">Cứu hộ & Đặt hẹn</span>
              <span className="hotline-number">1900 8888</span>
            </div>
          </a>

          <Link href="/booking" className="btn btn-primary header-btn">
            <Calendar size={16} />
            <span>Đặt lịch ngay</span>
          </Link>

          <button
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            type="button"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
