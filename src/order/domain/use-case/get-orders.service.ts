import { OrderRepository } from '../../infrastructure/repository/order.repository';

export const getOrdersServie = async () => {
  const { getOrders } = OrderRepository();

  return await getOrders();
};
