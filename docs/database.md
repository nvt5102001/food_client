# 🗄️ Database Design

## 1. users

- id
- email
- password
- created_at

---

## 2. products

- id
- name
- price
- stock
- created_at

---

## 3. orders

- id
- user_id
- status (
  1 - PENDING – vừa tạo đơn, chưa thanh toán
  2 - PAID – đã thanh toán thành công
  3 - PROCESSING – đang xử lý (provision WAF / tạo subscription)
  4 - COMPLETED – hoàn tất (dịch vụ đã active)
  5 - CANCELLED – user/admin hủy
  6 - FAILED
  )
- payment_status
- total_price
- created_at

---

## 4. order_items

- id
- order_id
- product_id
- quantity
- price

---

## 5. relationships

- users 1 - n orders
- orders 1 - n order_items
- products 1 - n order_items
