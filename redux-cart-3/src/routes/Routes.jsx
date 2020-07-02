import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Order from '../components/Order';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/product' render={() => <Product />} />
                <Route exact path='/product/:id' render={(props) => <Product {...props}/>} />
                <Route exact path='/cart' render={() => <Cart />} />
                <Route exact path='/order' render={() => <Order />} />
            </Switch>
        </div>
    )
}
