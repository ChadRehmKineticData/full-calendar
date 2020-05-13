import React, { Component, createRef } from 'react';
import { compose, withHandlers } from 'recompose';
import './App.css';
import { Calendar } from './Calendar';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = createRef();
  }

  clickhandler = () => {
    this.calendarRef.current.handleClick()
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.clickhandler}>Click Me</button>
        <div className="calendar_wrapper">
          <Calendar ref={this.calendarRef} />
        </div>
      </div>
    )
  }
}


export const App = compose(
  withHandlers()
)(AppComponent);
