import { OrderRepository } from '../../infrastructure/repository/order.repository';
import { CreateOrderDto } from '../dto/create-order.dto';

export const createOrderService = async (createOrderDto: CreateOrderDto) => {
  const { fetchCreateOrder } = OrderRepository();

  const orderCreated = await fetchCreateOrder(createOrderDto);

  return orderCreated;
};
