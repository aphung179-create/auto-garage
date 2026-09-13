import Link from "next/link";

const services = [
  ["Bảo dưỡng định kỳ", "Kiểm tra tổng thể và bảo dưỡng theo mốc kilomet."],
  ["Kiểm tra phanh", "Kiểm tra má phanh, đĩa phanh và hệ thống phanh."],
  ["Thay dầu động cơ", "Thay dầu và kiểm tra các hạng mục liên quan."],
  ["Chăm sóc điều hòa", "Kiểm tra, vệ sinh và bảo dưỡng hệ thống điều hòa."]
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
            AutoCare Garage
          </p>
          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
            Quản lý gara thông minh, chăm sóc xe chuyên nghiệp.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Đặt lịch, quản lý hồ sơ xe, theo dõi sửa chữa và lịch sử bảo dưỡng trong một hệ thống.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
          >
            Đặt lịch ngay
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Dịch vụ nổi bật</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([name, desc]) => (
            <div key={name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
