import React from 'react';
//routing
import { Switch, Route, Redirect } from 'react-router-dom';
//page and components
import { Category } from './pages/Category';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { NotFound } from './pages/NotFound';
import { MenuHeader } from './components/MenuHeader';
//notification
import { NotificationContainer } from 'react-notifications';
//styles
import 'react-notifications/lib/notifications.css';
import './App.css';


const App = () => {
  return (
    <div>
      <MenuHeader/>

      <Switch>
        <Route exact path="/" render={() => <Category/>}/>
        <Route path='/category' render={() => <Category/>}/>
        <Route path="/cart" render={() => <Cart/>}/>
        <Route path="/product/:id?" render={(props) => <Product {...props}/>}/>
        {/* route for git-pages */}
        <Route path='/react_storefront_tz' render={() => <Redirect to='/category'/>}/>
        <Route component={NotFound}/>
      </Switch>

      <NotificationContainer/>
    </div>
  );
};

export { App };