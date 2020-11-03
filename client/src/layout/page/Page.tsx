import React from 'react';
import { useHistory } from 'react-router-dom';
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
        </div>
      </div>
    </>
  );
};

export default Page;
