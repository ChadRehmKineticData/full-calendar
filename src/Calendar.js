import React, { Component, Fragment, createRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';

import './main.scss';
import { events } from './events';

export class Calendar extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = createRef();
  }

  handleEventClick = ({ event }) => {
    console.log(event.extendedProps.details)
  }

  handleClick = event => {
    const api = this.calendarRef.current.getApi();
    api.gotoDate(moment().subtract(1, 'months').format());
  }

  render() {
    return ( 
      <Fragment>
        <FullCalendar 
          events={events}
          ref={this.calendarRef}
          height={"parent"}
          contentHeight={"auto"}
          eventLimit={3}
          defaultView="dayGridDay" 
          plugins={[ dayGridPlugin, timeGridPlugin ]} 
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,timeGridDay'
          }}
          buttonText={{
            timeGridDay: 'agenda'
          }}
          eventClick={this.handleEventClick}
          fixedWeekCount={false}
        />
      </Fragment>
    )
  }
};
