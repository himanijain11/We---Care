import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Gate from './pages/Login/GatekeeperLogin';
import MainPage from './pages/Mainpage/MainPage';
import AdminDash from './pages/AdminDash/AdminDash';
import Admin from './pages/Login/AdminLogin';
import StudentLog from './pages/Login/StudentLogin';
import StudentRegister from './pages/StudentRegister/StudentRegister';
import Excel2 from './pages/Excel/Excel2';
import Assessment from './pages/Assesment/Assessment';
import Excel from './pages/Excel/Excel';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Demo" component={AdminDash} />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Login" component={Admin} />
            <Route exact path="/Login3" component={StudentLog} />
            <Route exact path="/Login4" component={Gate} />
            <Route exact path='/Excel' component={Excel}></Route>
            <Route exact path='/App' component={StudentRegister}></Route>
            <Route exact path='/Excel2' component={Excel2}></Route>
            {/* <Route exact path='/Checkout' component={Checkout}></Route> */}
            {/* <Route exact path='/Pcheckout' component={PCheckout}></Route> */}
            <Route exact path='/Assessment' component={Assessment}></Route>
        </Switch>
    </BrowserRouter>
)