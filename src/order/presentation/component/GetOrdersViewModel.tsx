import { useEffect, useState } from 'react';
import { getOrdersServie } from '../../domain/use-case/get-orders.service';
import { Order } from '../../domain/entity/order.entity';

export const useGetOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getOrders = async () => {
    try {
      setLoading(true);
      const orders = await getOrdersServie();
      setLoading(false);
      setOrders(orders);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return {
    loading,
    error,
    orders,
  };
};
