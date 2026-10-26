import api from "./api";
import type { AddCartPayload, CartItem, UpdateCartPayload } from "./types";

export const cartService = {
  async getCart(): Promise<CartItem[]> {
    const response = await api.get<CartItem[]>("/carts");
    return Array.isArray(response.data) ? response.data : [];
  },

  async getCartItem(id: string | number): Promise<CartItem> {
    const response = await api.get<CartItem>(`/carts/${id}`);
    return response.data;
  },

  async addToCart(payload: AddCartPayload): Promise<CartItem> {
    // Send both variants for compatibility
    const body = {
      product_id: payload.product_id ?? payload.productId,
      productId: payload.productId ?? payload.product_id,
      quantity: payload.quantity ?? 1,
      ...payload,
    };
    const response = await api.post<CartItem>("/carts", body);
    return response.data;
  },

  async updateCartItem(id: string | number, payload: UpdateCartPayload): Promise<CartItem> {
    const response = await api.put<CartItem>(`/carts/${id}`, payload);
    return response.data;
  },

  async removeFromCart(id: string | number): Promise<{ message?: string }> {
    const response = await api.delete(`/carts/${id}`);
    return response.data;
  },
};
