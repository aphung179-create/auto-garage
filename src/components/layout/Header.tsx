import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          AUTOCARE
        </Link>
        <nav className="flex gap-5 text-sm">
          <Link href="/services">Dịch vụ</Link>
          <Link href="/booking">Đặt lịch</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
