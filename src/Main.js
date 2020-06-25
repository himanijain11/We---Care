// import Dashboard from './Dashboard';
import E from './Temporary/E';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Temp from './Component/TemperatureCheck/Temp'
import Checkout from './Component/Checkout/Checkout';
import Appbar from './Component/Appbar/Appbar'
import Login from './Component/Login/Login';



class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div style={{ display: "flex", margin: "5px 10px 20px", justifyContent: "space-between" }}>
                        <Link style={{ textDecoration: 'none', color: "black" }} to="/Dashboard">AppBar</Link>
                        <Link style={{ textDecoration: 'none', color: "black" }} to="/Login">Login</Link>
                        <Link style={{ textDecoration: 'none', color: "black" }} to="/Temp">Temperature Check</Link>
                        <Link style={{ textDecoration: 'none', color: "black" }} to="/Checkout">Checkout</Link>
                    </div>
                    <Switch>
                        <Route exact path='/Dashboard' component={Appbar}></Route>
                        <Route exact path='/Login' component={Login}></Route>
                        <Route exact path='/Temp' component={Temp}></Route>
                        <Route exact path='/Checkout' component={Checkout}></Route>
                    </Switch>
                </div>
            </Router>

        )
    }
}
export default Main;
