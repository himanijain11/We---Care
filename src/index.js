import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import StudentProfileDB from './pages/AdminDash/StudentProfileDB';
import TempDisplayReport from './pages/TemperatureCheck/TempDisplayReport';
import StudentProAdmin from './pages/StudentProfile/StudentProAdmin';
import AssessmentDisplay from './pages/Assesment/AssessmentDisplay';


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

