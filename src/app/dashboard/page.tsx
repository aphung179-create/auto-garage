import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-3 text-gray-600">Khu vực tổng quan mẫu cho khách hàng / nhân viên.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Lịch hẹn hôm nay" value="24" />
        <Card title="Xe đang sửa" value="12" />
        <Card title="Khách hàng" value="156" />
        <Card title="Doanh thu tháng" value="86,5 triệu" />
      </div>
    </main>
  );
}
