import api from "./api";
import type { CreateOrderPayload, Order } from "./types";

export const orderService = {
  async getOrders(): Promise<Order[]> {
    const response = await api.get<Order[]>("/orders");
    return Array.isArray(response.data) ? response.data : [];
  },

  async getOrderById(id: string | number): Promise<Order> {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
  },

  async createOrder(payload: CreateOrderPayload): Promise<Order> {
    const response = await api.post<Order>("/orders", payload);
    return response.data;
  },

  async updateOrder(id: string | number, payload: Partial<Order>): Promise<Order> {
    const response = await api.put<Order>(`/orders/${id}`, payload);
    return response.data;
  },

  async deleteOrder(id: string | number): Promise<{ message?: string }> {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  },
};
