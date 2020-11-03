import { CrustContext } from '@context/crust';
import { OrderContext } from '@context/order';
import { SizeContext } from '@context/size';
import { ToppingsContext } from '@context/toppings';
import React, { useContext } from 'react';

const OrderConfirmation = () => {
  const { size } = useContext(SizeContext);
  const { crust } = useContext(CrustContext);
  const { toppingsList } = useContext(ToppingsContext);
  const { total } = useContext(OrderContext);

  return (
    <>
      <h4 className="page__title">Choose the size of your pizza</h4>
      <h5>Here's a resume of your order:</h5>
      <div className="page__table-wrapper">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {size && (
              <tr>
                <td>
                  {size.label} - Maximun number of ingredients: {size.maxIngredients}
                </td>
                <td>$ {size.price}</td>
              </tr>
            )}
            {crust && (
              <tr>
                <td>{crust.label}</td>
                <td>$ {crust.price}</td>
              </tr>
            )}
            {toppingsList &&
              toppingsList.length > 0 &&
              toppingsList.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.label}</td>
                  <td>---</td>
                </tr>
              ))}

            {toppingsList && toppingsList.length > 3 && (
              <tr>
                <td>Value charged for extra toppings (more than 3)</td>
                <td>$ {(toppingsList.length - 3) * 0.5}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <h3>Your total is $ {total}</h3>
    </>
  );
};

export default OrderConfirmation;
