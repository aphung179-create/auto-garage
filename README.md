# AUTOCARE GARAGE

Project base cho website quản lý và đặt lịch gara ô tô.

## Công nghệ

- Next.js + TypeScript
- Tailwind CSS
- Prisma ORM
- MySQL
- Zod
- React Hook Form
- Recharts (đã cài, sẵn sàng cho dashboard)
- Lucide React (đã cài)
- Auth.js: chưa cấu hình trong base này
- OpenAI API: chưa cấu hình trong base này

## Cài đặt

```bash
npm install
```

Tạo database MySQL:

```sql
CREATE DATABASE garage_db;
```

Copy `.env.example` thành `.env` và chỉnh `DATABASE_URL`.

Sau đó:

```bash
npx prisma migrate dev --name init
npm run dev
```

Mở http://localhost:3000

## API mẫu

- `GET /api/vehicles`
- `POST /api/vehicles`

## Lộ trình phát triển

1. Auth.js + phân quyền
2. CRUD khách hàng
3. CRUD xe
4. CRUD dịch vụ
5. Đặt lịch
6. Phiếu kiểm tra
7. Phiếu sửa chữa
8. Báo giá
9. Thanh toán
10. Dashboard + Recharts
11. AI Garage Assistant
