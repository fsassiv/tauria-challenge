import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReturnButton from './../../components/ReturnButton/ReturnButton';
import { PageProps } from './types';

const Page = (props: PageProps) => {
  const { children } = props;
  const { location } = useHistory();

  return (
    <>
      <div className="page">
        <div className="container">
          {children}
          {location.pathname !== '/' && <ReturnButton />}
          {location.pathname === '/toppings' && (
            <Link to="/confirmation" className="button button-primary page__next-btn">
              Finish order
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
