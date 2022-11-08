import React, {useState} from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

function EventCalendar() {
   const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})

   const events = [
      {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 11, 0),
        end: new Date(2022, 11, 0)
      },
      {
        title: "Vacation",
        start: new Date(2022, 10, 1),
        end: new Date(2022, 10, 5)
      },
      {
        title: "Conference",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 7)
      }
     ]

     const [allEvents, setAllEvents] = useState(events)

   function handleAddEvent() {
      const newEventArray = [...allEvents, newEvent]
      setAllEvents(newEventArray);
    }

    const locales = {
      "en-US": require("date-fns/locale/en-US")
   }
  
   const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales
   });


return (
 <div className="calendar">
   <h1>Calendar</h1>
   <h2>Add New Event</h2>
   <div>
      <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
         value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}
      />
      <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start: start})}/>
      <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
      <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
   </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 600, margin: "50px"}}/>
</div>

)}

export default EventCalendar;