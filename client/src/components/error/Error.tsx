import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h5>Sorry, but omething went wrong.</h5>
      <h5>Please, restart your order and try againd.</h5>
      <Link to="/" className="button button-primary">
        Go back to the Home Page
      </Link>
    </>
  );
};

export default Error;
