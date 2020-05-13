import React, { useRef, Fragment, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { compose, withHandlers } from 'recompose';

import './main.scss';
import { events } from './events';

export const CalendarComponent = ({handleEventClick, handleClick}) => {
  const apiRef = useRef(null);  
  const clickhandler = useMemo(() => {
    console.log("hi");
    handleClick(apiRef)
  },[apiRef]);

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
      />
    </Fragment>
  )
};

export const handleClick = fullcalendar => event => {
  console.log(fullcalendar);
}

const handleEventClick = () => ({event}) => {
  console.log(event.extendedProps.details)
}

export const Calendar = compose(
  withHandlers({handleEventClick, handleClick})
)(CalendarComponent)