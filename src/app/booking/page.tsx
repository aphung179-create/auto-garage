import { BookingForm } from "@/components/booking/BookingForm";
import { Calendar, ShieldCheck, Clock, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Đặt Lịch Bảo Dưỡng - AutoCare Garage",
  description: "Đặt hẹn bảo dưỡng, sửa chữa ô tô trực tuyến nhanh chóng và thuận tiện tại AutoCare Garage."
};

export default function BookingPage() {
  return (
    <div className="container booking-page-container">
      <div className="section-header" style={{ marginBottom: "36px" }}>
        <span className="section-tag">
          <Calendar size={14} /> Đặt hẹn trực tuyến
        </span>
        <h1 className="section-title">Đặt Lịch Bảo Dưỡng & Sửa Chữa</h1>
        <p className="section-subtitle">
          Điền thông tin xe và chọn thời gian phù hợp. Cố vấn dịch vụ của AutoCare Garage sẽ gọi điện xác nhận và chuẩn bị khoang kỹ thuật sẵn sàng đón bạn.
        </p>
      </div>

      <div className="booking-card">
        <BookingForm />
      </div>

      <div
        style={{
          marginTop: "48px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px"
        }}
      >
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", gap: "14px", alignItems: "center" }}>
          <Clock size={28} color="#2563eb" />
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px" }}>Tiếp nhận đúng giờ</div>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>Ưu tiên xử lý xe đã đặt lịch trước, không chờ đợi</div>
          </div>
        </div>

        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", gap: "14px", alignItems: "center" }}>
          <ShieldCheck size={28} color="#10b981" />
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px" }}>Báo giá rõ ràng</div>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>Chỉ tiến hành sau khi khách duyệt phiếu báo giá</div>
          </div>
        </div>

        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", gap: "14px", alignItems: "center" }}>
          <PhoneCall size={28} color="#f59e0b" />
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px" }}>Hỗ trợ hotline</div>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>Gọi ngay 1900 8888 nếu quý khách cần hỗ trợ gấp</div>
          </div>
        </div>
      </div>
    </div>
  );
}
