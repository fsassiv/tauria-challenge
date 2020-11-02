import Page from '@layout/page/Page';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
