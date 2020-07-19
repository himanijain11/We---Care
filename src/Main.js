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
import GatekeeperDash from './pages/GatekeeperDash/GatekeeperDash';
import TemperatureCheck from './pages/TemperatureCheck/TemperatureCheck';
import AssessmentDisplay from './pages/Assesment/AssessmentDisplay';
import TempDisplayReport from './pages/TemperatureCheck/TempDisplayReport';
import StudentProAdmin from './pages/StudentProfile/StudentProAdmin';
import Assessment1 from './pages/Assesment/Assessment1';
import MessageRepoStudent from './pages/MessageReport/MessageRepoStudent';
import Health from './pages/HealthStats/Health';
export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Demo" component={AdminDash} />
            <Route exact path="/" component={MainPage} />
            <Route exact path='/Excel' component={Excel}></Route>
            <Route exact path='/App' component={StudentRegister}></Route>
            <Route exact path='/Excel2' component={Excel2}></Route>
            <Route  path='/Assessment' component={Assessment}></Route>
            <Route exact path='/AssessmentDisplay' component={AssessmentDisplay}></Route>
            <Route exact path='/TempDisplayReport' component={TempDisplayReport}></Route>
            <Route exact path='/StudentDash' component={StudentDash}></Route>
            <Route  path='/Assessment1' component={Assessment1}></Route>
            <Route exact path='/MessageRepoStudent' component={MessageRepoStudent}></Route>
            <Route exact path='/StudentProAdmin' component={StudentProAdmin}></Route>
            <Route exact path='/StudentAttend' component={StudentAttend}></Route>
            <Route exact path='/GatekeeperDash' component={GatekeeperDash}></Route>
            <Route exact path='/TemperatureCheck' component={TemperatureCheck}></Route>
            <Route exact path='/MessageReport' component={MessageReport}></Route>
            <Route exact path='/HealthStats' component={Health}></Route>
          
        </Switch>
    </BrowserRouter>
)