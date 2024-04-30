import { useState } from 'react';
import { createOrderService } from '../../domain/use-case/create-order.service';

export const CreateOrderViewModel = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  const createOrderCommandHandler = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const product1 = form.product0.value;
    const product2 = form.product1?.value ?? undefined;
    const quantity1 = form.quantity0.value;
    const quantity2 = form.quantity1?.value ?? undefined;

    if (!name || !product1 || !quantity1)
      return alert('Please fill all fields');

    if (Number(quantity1) > 2 || Number(quantity2) > 2)
      return alert('Quantity must be less than 3');

    await createOrderService({
      customerName: name,
      orderItems: [
        {
          productName: product1,
          quantity: quantity1,
          price: 15,
        },
        ...(product2 && [
          {
            productName: product2,
            quantity: quantity2,
            price: 15,
          },
        ]),
      ],
    });
  };

  return {
    createOrderCommandHandler,
    productQuantity,
    setProductQuantity,
  };
};
