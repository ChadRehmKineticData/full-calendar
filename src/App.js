import React from 'react';
import { compose, withHandlers } from 'recompose';
import './App.css';
import { Calendar } from './Calendar';

const AppComponent = ({}) =>
  <div className="App">
    <div className="calendar_wrapper">
      <Calendar />
    </div>
  </div>



export const App = compose(
  withHandlers()
)(AppComponent);
