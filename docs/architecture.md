# 🧱 Architecture

## 1. Tổng quan

Hệ thống backend được thiết kế theo layered architecture:

- Controller: nhận request
- Service: xử lý business logic
- Repository: làm việc với database

---

## 2. Flow tổng thể

User → Controller → Service → Repository → Database

---

## 3. Order Flow

User → Order API → DB (create order)

Payment → Update Order Status

---

## 4. (Optional) Event-driven

- OrderCreated → Payment Service
- PaymentSuccess → Order Service
- OrderCompleted → Notification

---

## 5. Design Principles

- Separation of concerns
- Stateless API
- Clear business flow
- Easy to scale
