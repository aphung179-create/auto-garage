"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Phone, Car, Calendar, CheckCircle, FileText, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ và tên của bạn"),
  phone: z.string().min(9, "Vui lòng nhập số điện thoại hợp lệ"),
  licensePlate: z.string().min(5, "Vui lòng nhập biển số xe (VD: 30F-123.45)"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ cần thực hiện"),
  date: z.string().min(1, "Vui lòng chọn ngày hẹn"),
  note: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Booking submission:", data);
    setSubmittedData(data);
    setSubmitted(true);
  };

  if (submitted && submittedData) {
    return (
      <div style={{ textAlign: "center", padding: "30px 20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#ecfdf5",
            color: "#10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px"
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px", color: "#0f172a" }}>
          Đặt Lịch Thành Công!
        </h3>
        <p style={{ fontSize: "14px", color: "#64748b", maxWidth: "460px", margin: "0 auto 24px" }}>
          Cảm ơn quý khách <strong>{submittedData.name}</strong>. Cố vấn dịch vụ của AutoCare Garage sẽ liên hệ xác nhận trong vòng 10 phút.
        </p>
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "left",
            fontSize: "13.5px",
            marginBottom: "24px"
          }}
        >
          <div style={{ marginBottom: "8px" }}><strong>Dịch vụ:</strong> {submittedData.service}</div>
          <div style={{ marginBottom: "8px" }}><strong>Biển số xe:</strong> {submittedData.licensePlate}</div>
          <div style={{ marginBottom: "8px" }}><strong>Số điện thoại:</strong> {submittedData.phone}</div>
          <div><strong>Ngày hẹn:</strong> {submittedData.date}</div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            reset();
          }}
          className="btn btn-outline"
        >
          Đặt thêm lịch hẹn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            <User size={15} /> Họ và tên khách hàng *
          </label>
          <input
            {...register("name")}
            placeholder="VD: Nguyễn Văn An"
            className="form-input"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">
            <Phone size={15} /> Số điện thoại liên hệ *
          </label>
          <input
            {...register("phone")}
            placeholder="VD: 0912 345 678"
            className="form-input"
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">
            <Car size={15} /> Biển số xe & dòng xe *
          </label>
          <input
            {...register("licensePlate")}
            placeholder="VD: 30A-999.88 (Mazda 3)"
            className="form-input"
          />
          {errors.licensePlate && (
            <p className="form-error">{errors.licensePlate.message}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            <Calendar size={15} /> Ngày mong muốn bảo dưỡng *
          </label>
          <input
            type="date"
            {...register("date")}
            className="form-input"
          />
          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          <CheckCircle size={15} /> Chọn gói dịch vụ ưu tiên *
        </label>
        <select {...register("service")} className="form-select">
          <option value="">-- Vui lòng chọn dịch vụ chính --</option>
          <option value="Bảo dưỡng định kỳ">Bảo dưỡng định kỳ tổng thể</option>
          <option value="Thay dầu & lọc dầu động cơ">Thay dầu & lọc dầu động cơ cao cấp</option>
          <option value="Kiểm tra và sửa chữa hệ thống phanh">Kiểm tra và sửa chữa hệ thống phanh</option>
          <option value="Chăm sóc và bảo dưỡng điều hòa">Chăm sóc và vệ sinh điều hòa ô tô</option>
          <option value="Chẩn đoán điện và cảm biến ECU">Chẩn đoán điện & cảm biến ECU</option>
          <option value="Cân mâm bấm chì và thước lái 3D">Cân mâm bấm chì & căn chỉnh thước lái 3D</option>
          <option value="Khác (Ghi chú mô tả thêm)">Hạng mục khác (Ghi rõ bên dưới)</option>
        </select>
        {errors.service && <p className="form-error">{errors.service.message}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">
          <FileText size={15} /> Mô tả hiện tượng / Ghi chú thêm
        </label>
        <textarea
          {...register("note")}
          rows={3}
          placeholder="Mô tả hiện tượng xe gặp phải (tiếng kêu, rung lắc, đèn báo lỗi taplo...) để kỹ thuật viên chuẩn bị trước..."
          className="form-textarea"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary form-submit-btn"
      >
        <Calendar size={18} />
        <span>{isSubmitting ? "Đang gửi thông tin..." : "Xác Nhận Đặt Lịch Hẹn Ngay"}</span>
      </button>
    </form>
  );
}
