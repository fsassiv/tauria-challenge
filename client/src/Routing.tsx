import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import axios from './services/api';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const Size = lazy(() => import('./pages/Size'));
const Crust = lazy(() => import('./pages/Crust'));
const Toppings = lazy(() => import('./pages/Toppings'));
const Confirmation = lazy(() => import('./pages/OrderConfirmation'));

const App = () => {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/toppings');
      console.log(data);
    })();
  }, []);

  return (
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
  );
};

export default App;
