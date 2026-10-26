# 🛒 E-commerce Backend System

## 📌 Overview

Đây là hệ thống backend cho một nền tảng e-commerce, cho phép:

- Người dùng đăng ký / đăng nhập
- Xem và mua sản phẩm
- Tạo và quản lý đơn hàng
- Xử lý thanh toán
- Theo dõi trạng thái đơn hàng

Hệ thống được thiết kế theo hướng dễ mở rộng, có thể tích hợp thêm:

- Event-driven architecture

---

## 🧱 Tech Stack

- Fontend: React
- Backend: Node.js (Express)
- Database: PostgreSQL
- ORM: Prisma / Sequelize
- Authentication: JWT
- API: RESTful
- AI: Stitch, Antigravity

---

## 🚀 Features

- Authentication (JWT)
- CRUD Product / Category
- Cart & Order
- Payment flow
- Order status tracking
- Basic error handling & validation

---

## 🧭 Architecture

Client → API Server → Database

(Optional)
Event-driven:
Order → Event → Service xử lý (payment / subscription)

---

## ⚙️ Setup & Run

```bash
git clone <repo>
cd project
npm install
npm run dev
```

---

## 📂 Project Structure

```
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── routes/
 ├── middlewares/
 └── utils/
docs/
 ├── architecture.md
 ├── business-flow.md
 ├── database.md
 └── advanced.md
```

---

## 📖 Documentation

Chi tiết xem trong thư mục `/docs`
