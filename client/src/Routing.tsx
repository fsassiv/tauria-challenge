import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Page from './layout/page/Page';

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/404/index'));
const Size = lazy(() => import('./pages/sizes'));
const Crust = lazy(() => import('./pages/crusts'));
const Toppings = lazy(() => import('./pages/toppings'));
const Confirmation = lazy(() => import('./pages/orderConfirmation'));

const App = () => {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      {currentPage !== '/' && <Header />}
      <Page>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/size" component={Size} />
            <Route path="/crust" component={Crust} />
            <Route path="/toppings" component={Toppings} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Page>
    </>
  );
};

export default App;
