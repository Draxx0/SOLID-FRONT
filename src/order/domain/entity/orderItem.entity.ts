import { Order } from './order.entity';

export interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  order: Order;
}
