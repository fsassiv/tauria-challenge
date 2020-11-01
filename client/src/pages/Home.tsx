import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../layout/page/Page';
import axios from '../services/api';

const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/toppings');

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <Page>
      <h1>Welcome to Flávio's Pizzaria</h1>
      <Link to="/size" className="button button-primary">
        Start order
      </Link>
    </Page>
  );
};

export default Home;
