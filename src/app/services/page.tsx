const services = [
  { name: "Bảo dưỡng định kỳ", price: "500.000đ", duration: "60 phút" },
  { name: "Thay dầu động cơ", price: "800.000đ", duration: "30 phút" },
  { name: "Kiểm tra hệ thống phanh", price: "300.000đ", duration: "45 phút" },
  { name: "Vệ sinh điều hòa", price: "450.000đ", duration: "60 phút" },
  { name: "Kiểm tra hệ thống điện", price: "350.000đ", duration: "60 phút" },
  { name: "Chăm sóc nội thất", price: "700.000đ", duration: "120 phút" }
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">Dịch vụ gara</h1>
      <p className="mt-3 text-gray-600">Danh sách dịch vụ mẫu để bạn phát triển thành CRUD.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="mt-4 text-2xl font-bold">{service.price}</p>
            <p className="mt-2 text-sm text-gray-500">Thời gian dự kiến: {service.duration}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
