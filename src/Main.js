import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './pages/Mainpage/MainPage';
import AdminDash from './pages/AdminDash/AdminDash';

import StudentRegister from './pages/StudentRegister/StudentRegister';
import Excel2 from './pages/Excel/Excel2';
import Assessment from './pages/Assesment/Assessment';
import Excel from './pages/Excel/Excel';
import StudentAttend from '../src/pages/StudentAttendance/StudentAttend';
import MessageReport from '../src/pages/MessageReport/MessageReport';
import StudentDash from './pages/StudentDash/StudentDash';
export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Demo" component={AdminDash} />
            <Route exact path="/" component={MainPage} />
            
            <Route exact path='/Excel' component={Excel}></Route>
            <Route exact path='/App' component={StudentRegister}></Route>
            <Route exact path='/Excel2' component={Excel2}></Route>
            <Route exact path='/StudentDash' component={StudentDash}></Route>
            <Route exact path='/Assessment' component={Assessment}></Route>
            <Route exact path='/StudentAttend' component={StudentAttend}></Route>
            <Route exact path='/MessageReport' component={MessageReport}></Route>
            
        </Switch>
    </BrowserRouter>
)