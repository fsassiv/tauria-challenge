import Error from '@components/error/Error';
import { CrustContext } from '@context/crust/index';
import axios from '@services/api';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CrustTypes } from './types';

const Crust = () => {
  const [crusts, setCrusts] = useState<CrustTypes[]>([]);
  const [hasError, setHasError] = useState(false);
  const { setCrust } = useContext(CrustContext);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/crusts');
        setCrusts(data);
      } catch (error) {
        setHasError(true);
      }
    })();
  }, []);

  const handleClick = (size: CrustTypes) => {
    setCrust(size);
    history.push('/toppings');
  };

  return (
    <>
      <h4 className="page__title">Choose the crust of your pizza</h4>
      {hasError ? (
        <Error />
      ) : (
        <ul className="page__list">
          {crusts.length > 0 &&
            crusts.map((item) => (
              <li key={item.label} className="button" onClick={() => handleClick(item)}>
                {item.label} $ {item.price}
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Crust;
