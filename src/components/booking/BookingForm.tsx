"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Nhập họ tên"),
  phone: z.string().min(9, "Nhập số điện thoại"),
  licensePlate: z.string().min(5, "Nhập biển số xe"),
  service: z.string().min(1, "Chọn dịch vụ"),
  date: z.string().min(1, "Chọn ngày"),
  note: z.string().optional()
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Booking:", data);
    alert("Form mẫu đã nhận dữ liệu. Hãy kết nối API để lưu vào MySQL.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="text-sm font-medium">Họ tên</label>
        <input {...register("name")} className="mt-2 w-full rounded-xl border p-3" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Số điện thoại</label>
        <input {...register("phone")} className="mt-2 w-full rounded-xl border p-3" />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Biển số xe</label>
        <input {...register("licensePlate")} className="mt-2 w-full rounded-xl border p-3" />
        {errors.licensePlate && <p className="mt-1 text-sm text-red-600">{errors.licensePlate.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Dịch vụ</label>
        <select {...register("service")} className="mt-2 w-full rounded-xl border p-3">
          <option value="">-- Chọn dịch vụ --</option>
          <option>Bảo dưỡng định kỳ</option>
          <option>Thay dầu động cơ</option>
          <option>Kiểm tra hệ thống phanh</option>
          <option>Vệ sinh điều hòa</option>
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Ngày hẹn</label>
        <input type="date" {...register("date")} className="mt-2 w-full rounded-xl border p-3" />
        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium">Mô tả vấn đề</label>
        <textarea {...register("note")} rows={4} className="mt-2 w-full rounded-xl border p-3" />
      </div>
      <button className="w-full rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white">
        Xác nhận đặt lịch
      </button>
    </form>
  );
}
