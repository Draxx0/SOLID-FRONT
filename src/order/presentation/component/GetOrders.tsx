import { useGetOrders } from './GetOrdersViewModel';

export const GetOrders = () => {
  const { orders, error, loading } = useGetOrders();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <table border={1}>
        <caption>Commandes :</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Shipping address</th>
            <th scope="col">Order items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <th>{order.id}</th>
              <th>{order.customerName}</th>
              <td>{order.price}</td>
              <td>{order.status}</td>
              <td>{order.shippingAddress || 'Non définis'}</td>
              <td>
                <ul>
                  {order.orderItems.map((orderItem) => (
                    <li key={orderItem.id}>
                      {orderItem.productName} x{orderItem.quantity} -{' '}
                      {orderItem.price}€
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
