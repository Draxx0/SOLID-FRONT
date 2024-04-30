import React from 'react';
import { CreateOrderViewModel } from './CreateOrderViewModel';

const PRODUCTS = [
  {
    name: 'Doliprane',
    price: 10,
  },
  {
    name: 'Spasfon',
    price: 15,
  },
];

const CreateOrder = () => {
  const { createOrderCommandHandler, productQuantity, setProductQuantity } =
    CreateOrderViewModel();

  return (
    <main>
      <h1> Create order</h1>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
          margin: '0 auto',
        }}
        onSubmit={createOrderCommandHandler}
      >
        <label htmlFor="">
          Combien de produit différent désirer vous acheter ?
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setProductQuantity(e.target.value)}
        >
          {PRODUCTS.map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="customer name" />

        <div className="flex flex-col">
          {Array.from({ length: productQuantity }).map((_, parentIndex) => (
            <div
              key={parentIndex}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="product">Product</label>
              <select name={`product${parentIndex}`} id="product">
                {PRODUCTS.map((product, index) => (
                  <option key={index} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>

              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name={`quantity${parentIndex}`}
              />
            </div>
          ))}

          <input type="submit" value="Créer une commande" />
        </div>
      </form>
    </main>
  );
};

export default CreateOrder;
