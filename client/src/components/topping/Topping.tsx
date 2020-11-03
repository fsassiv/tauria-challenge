import { SizeContext } from '@context/size';
import { ToppingsContext } from '@context/toppings';
import React, { useContext, useEffect, useState } from 'react';
import { ToppingProps, ToppingTypes } from './types';

const Topping = (prop: ToppingProps) => {
  const [checked, setChecked] = useState(false);
  const { topping } = prop;
  const { updateToppingsList, toppingsList, removeTopping } = useContext(ToppingsContext);
  const { size } = useContext(SizeContext);

  const handleChange = (topping: ToppingTypes) => {
    if (size && toppingsList.length < size.maxIngredients) {
      updateToppingsList(topping);
    } else {
      removeTopping(topping);
    }
  };

  useEffect(() => {
    if (toppingsList.filter((item: ToppingTypes) => item.id === topping.id).length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [toppingsList]);

  return (
    <tr>
      <td>
        <input type="checkbox" name={topping.label} id={topping.id} checked={checked} onChange={() => handleChange(topping)} />
      </td>
      <td>{topping.label}</td>
      <td>
        <img className="topping__image" alt={topping.label} src={topping.imgUrl} />
      </td>
    </tr>
  );
};

export default Topping;
