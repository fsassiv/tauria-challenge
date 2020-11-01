import React, { useEffect } from 'react';
import './App.scss';
import axios from './services/api';

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/toppings');

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
    console.log('Mounted again');
  }, []);

  return <div>Hello world</div>;
};

export default App;
