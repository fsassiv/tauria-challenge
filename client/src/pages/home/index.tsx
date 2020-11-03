import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to Flávio's Pizzaria</h1>
      <Link to="/size" className="button button-primary">
        Start order
      </Link>
    </>
  );
};

export default Home;
