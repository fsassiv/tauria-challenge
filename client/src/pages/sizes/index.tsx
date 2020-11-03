import Error from '@components/error/Error';
import { SizeContext } from '@context/size/index';
import axios from '@services/api';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SizeTypes } from './types';

const Size = () => {
  const [sizes, setSizes] = useState<SizeTypes[]>([]);
  const [hasError, setHasError] = useState(false);
  const { setSize } = useContext(SizeContext);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/sizes');
        setSizes(data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  const handleClick = (size: SizeTypes) => {
    setSize(size);
    history.push('/crust');
  };

  return (
    <>
      <h4 className="page__title">Choose the size of your pizza</h4>
      {hasError ? (
        <Error />
      ) : (
        <ul className="page__list">
          {sizes.length > 0 &&
            sizes.map((item) => (
              <li key={item.label} className="button" onClick={() => handleClick(item)}>
                {item.label} $ {item.price}
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Size;
