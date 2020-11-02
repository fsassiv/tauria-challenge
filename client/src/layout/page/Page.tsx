import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import ReturnButton from './../../components/ReturnButton/ReturnButton';
import { PageProps } from './Pages.types';

const Page = (props: PageProps) => {
  const { children, withHeader } = props;
  const { location } = useHistory();

  return (
    <>
      {withHeader && <Header />}
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
