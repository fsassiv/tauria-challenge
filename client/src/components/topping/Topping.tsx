import { ToppingsContext } from '@context/toppings';
import React, { useContext, useEffect, useState } from 'react';
import { ToppingProps } from './types';

const Topping = (prop: ToppingProps) => {
  const [checked, setChecked] = useState(false);
  const { topping } = prop;
  const { updateToppingsList, toppingsList } = useContext(ToppingsContext);

  useEffect(() => {
    if (toppingsList.filter((item) => item.id === topping.id).length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [toppingsList]);

  return (
    <tr>
      <td>
        <input type="checkbox" name={topping.label} id={topping.id} checked={checked} onChange={() => updateToppingsList(topping)} />
      </td>
      <td>{topping.label}</td>
      <td>
        <img className="topping__image" alt={topping.label} src={topping.imgUrl} />
      </td>
    </tr>
  );
};

export default Topping;
