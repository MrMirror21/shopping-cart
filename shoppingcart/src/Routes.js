import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Cart from './Cart';

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/products" component={App} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </Router>
        )
    }

}

export default Routes;