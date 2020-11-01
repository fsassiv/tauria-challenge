import React from 'react';
import Header from '../../components/header/Header';
import ReturnButton from './../../components/ReturnButton/ReturnButton';
import { PageProps } from './Pages.types';

const Page = (props: PageProps) => {
  const { children, withHeader } = props;
  return (
    <>
      {withHeader && <Header />}
      <div className="container page">
        {children}
        <ReturnButton />
      </div>
    </>
  );
};

export default Page;
