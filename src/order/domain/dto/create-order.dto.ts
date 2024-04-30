export type CreateOrderDto = {
  customerName: string;
  orderItems: OrderItemDto[];
};

export type OrderItemDto = {
  productName: string;
  quantity: number;
  price: number;
};
