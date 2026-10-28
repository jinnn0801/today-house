export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  discountRate: number; // 0~100
  category: string;
  image: string;
  options: string[];
  description: string;
  specs: { label: string; value: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}