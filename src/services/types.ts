export interface ProductImage {
  id?: number;
  url?: string;
  image_url?: string;
  name?: string;
}

export interface Product {
  id?: number | string;
  product_id?: number | string;
  name: string;
  title?: string;
  slug?: string;
  price: number | string;
  quantity?: number;
  stock?: number;
  description?: string;
  unit?: string;
  origin?: string;
  category_id?: number;
  is_visible?: boolean;
  image?: string | ProductImage[];
  images?: ProductImage[];
  badge?: {
    label: string;
    type: 'organic' | 'gift' | 'bestseller';
  };
  created_at?: string;
  updated_at?: string | null;
}

export interface User {
  id?: number | string;
  user_id?: number | string;
  email: string;
  name?: string;
  role?: string;
  phone?: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  user?: User;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name?: string;
  phone?: string;
}

export interface CartItem {
  id?: number;
  cart_id?: number;
  product_id?: number;
  productId?: number;
  user_id?: number;
  userId?: number;
  quantity: number;
  product?: Product;
  Product?: Product;
  // Fallbacks for display
  title?: string;
  price?: number | string;
  image?: string;
  origin?: string;
}

export interface AddCartPayload {
  productId?: number;
  product_id?: number;
  quantity?: number;
  [key: string]: unknown;
}

export interface UpdateCartPayload {
  quantity: number;
  [key: string]: unknown;
}

export interface OrderAddress {
  id?: number;
  full_address?: string;
  ward?: string;
  province?: string;
}

export interface OrderPaymentMethod {
  payment_id?: number;
  method?: string;
  status?: string;
  paid_at?: string;
}

export interface OrderDetail {
  order_detail_id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
  unit_price?: number | string;
  product?: Product;
}

export interface OrderItem {
  id?: number;
  product_id?: number;
  productId?: number;
  quantity: number;
  price: number | string;
  product?: Product;
  Product?: Product;
}

export interface Order {
  id?: number;
  order_id?: number;
  user_id?: number;
  userId?: number;
  total?: number | string;
  total_amount?: number | string;
  totalAmount?: number | string;
  status?: string;
  shipping_address?: string;
  payment_method?: string | OrderPaymentMethod[];
  items?: OrderItem[];
  order_detail?: OrderDetail[];
  address?: OrderAddress;
  created_at?: string;
  createdAt?: string;
}

export interface CreateOrderPayload {
  items?: { product_id: number; quantity: number; price?: number }[];
  shipping_address?: string;
  recipient_name?: string;
  phone?: string;
  recipient_phone?: string;
  payment_method?: string;
  total?: number;
  [key: string]: unknown;
}
