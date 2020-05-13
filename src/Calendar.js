import React, { useRef, Fragment, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { compose, withHandlers } from 'recompose';
import moment from 'moment';

import './main.scss';
import { events } from './events';

export const handleClick = fullcalendar => event => {
  const api = fullcalendar.current.getApi();
  api.gotoDate(moment().subtract(1, 'months').format());
}

export const CalendarComponent = ({handleEventClick}) => {
  const apiRef = useRef(null);  
  const clickhandler = useMemo(() => handleClick(apiRef), [apiRef]);

  return ( 
    <Fragment>
      <button onClick={clickhandler}>Click Me</button>
      <FullCalendar 
        events={events}
        ref={apiRef}
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
        eventClick={handleEventClick}
        fixedWeekCount={false}
      />
    </Fragment>
  )
};

const handleEventClick = () => ({event}) => {
  console.log(event.extendedProps.details)
}

export const Calendar = compose(
  withHandlers({handleEventClick})
)(CalendarComponent)