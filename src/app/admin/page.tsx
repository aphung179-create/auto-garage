import { Card } from "@/components/ui/Card";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Admin</p>
          <h1 className="mt-2 text-4xl font-bold">Quản lý gara</h1>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Lịch hẹn" value="24" />
        <Card title="Phiếu sửa chữa" value="18" />
        <Card title="Khách hàng" value="156" />
        <Card title="Doanh thu" value="86,5M" />
      </div>
      <div className="mt-8 rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-semibold">Các module cần phát triển</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Quản lý khách hàng</li>
          <li>Quản lý xe</li>
          <li>Quản lý lịch hẹn</li>
          <li>Phiếu kiểm tra và sửa chữa</li>
          <li>Báo giá và thanh toán</li>
          <li>Nhân viên / kỹ thuật viên</li>
          <li>Thống kê và báo cáo</li>
        </ul>
      </div>
    </main>
  );
}
