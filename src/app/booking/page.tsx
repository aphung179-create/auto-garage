import { BookingForm } from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold">Đặt lịch dịch vụ</h1>
      <p className="mt-3 text-gray-600">Form mẫu. Sau khi kết nối database, dữ liệu sẽ được lưu vào Appointment.</p>
      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <BookingForm />
      </div>
    </main>
  );
}
