import Error from '@components/error/Error';
import Topping from '@components/topping/Topping';
import axios from '@services/api';
import React, { useEffect, useState } from 'react';
import { ToppingTypes } from './types';

const Topings = () => {
  const [hasError, setHasError] = useState(false);
  const [toppings, setToppings] = useState<ToppingTypes[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/toppings');
        setToppings(data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  return (
    <>
      <h4 className="page__title">Choose your toppings</h4>
      {hasError ? (
        <Error />
      ) : (
        <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Add</th>
                <th>Label</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>{toppings.length > 0 && toppings.map((item) => <Topping key={item.id} topping={item} />)}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Topings;
