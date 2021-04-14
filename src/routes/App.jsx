import React from 'react'



import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../containers/Home';
import Checkout from '../co value={}ntainers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NoFund from '../containers/NoFund';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'



export default function App() {
    const initialState = useInitialState(); 
    return (
        //<AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/checkout/information" component={Information} />
                        <Route exact path="/checkout/payment" component={Payment} />
                        <Route exact path="/checkout/success" component={Success} />
                        <Route component={NoFund} />
                    </Switch>
                </Layout>
            </BrowserRouter>
       // </AppContext.Provider>
    )
}
 