import { OrderItem } from './orderItem.entity';

export interface Order {
  id: string;
  price: number;
  customerName: string;
  orderItems: OrderItem[];
  shippingAddress: string | null;
  shippingAddressSetAt: string | null;
  status: 'CART' | 'SHIPPING_ADRESS_SET' | 'PAID';
  paidAt: string | null;
}
