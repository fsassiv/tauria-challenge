import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../layout/page/Page';

const NotFound = () => {
  return (
    <Page>
      <h1>404</h1>
      <h3>Sorry. Page not found</h3>
      <Link to="/" className="button button-primary">
        Go back to the Home Page
      </Link>
    </Page>
  );
};

export default NotFound;
