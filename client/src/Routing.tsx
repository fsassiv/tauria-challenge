import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const Size = lazy(() => import('./pages/Size'));
const Crust = lazy(() => import('./pages/Crust'));
const Toppings = lazy(() => import('./pages/Toppings'));
const Confirmation = lazy(() => import('./pages/OrderConfirmation'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/size" exact component={Size} />
        <Route path="/crust" exact component={Crust} />
        <Route path="/toppings" exact component={Toppings} />
        <Route path="/confirmation" exact component={Confirmation} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default App;