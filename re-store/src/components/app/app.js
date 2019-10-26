import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;