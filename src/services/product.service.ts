import api from "./api";
import type { Product, ProductImage } from "./types";
import { API_URL } from "../configs";

export const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("/products");
    return Array.isArray(response.data) ? response.data : [];
  },

  async getProductById(id: string | number): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  async createProduct(data: Partial<Product>): Promise<Product> {
    const response = await api.post<Product>("/products", data);
    return response.data;
  },

  async updateProduct(id: string | number, data: Partial<Product>): Promise<Product> {
    const response = await api.put<Product>(`/products/${id}`, data);
    return response.data;
  },

  async deleteProduct(id: string | number): Promise<{ message?: string }> {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  getImageUrl(image: string | ProductImage[] | undefined, fallback: string = ""): string {
    if (!image) return fallback;

    if (Array.isArray(image)) {
      if (image.length === 0) return fallback;
      const first = image[0];
      const url = typeof first === "string" ? first : (first.url || first.image_url || first.name);
      return this.getImageUrl(url, fallback);
    }

    if (typeof image === "string") {
      if (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
        return image;
      }
      const cleaned = image.startsWith("/") ? image : `/uploads/${image}`;
      const base = API_URL || "http://localhost:3000";
      return `${base}${cleaned}`;
    }

    return fallback;
  },

  formatPrice(price: number | string | undefined): string {
    if (price === undefined || price === null) return "0đ";
    const num = typeof price === "number" ? price : parseFloat(price);
    if (isNaN(num)) return `${price}đ`;
    return `${num.toLocaleString("vi-VN")}đ`;
  },
};
