import React, { Fragment, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
import * as dates from '../assets/dates';
import events from '../assets/events';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const mLocalizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

function EventCalendar({
   localizer = mLocalizer,
   ...props
}) {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2022, 10, 1),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  )

  function handleAddEvent () {
     setAllEvents([...allEvents, newEvent])
  }


  return (
    <Fragment>
      <div className="height600" {...props} style={{height: 700}}>
         <div className="new_event_text has-text-centered">
            <h2>Add New Event</h2>
            <form className="ml-4 mr-4">
               <div className="field">
                  <div className="control">
                     <input type="text" placeholder="Add Title" className="input" style={{width: "20%", marginRight: "10px"}} 
                     value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                     />
                  </div>
               </div>
               <div className="field">
                  <div className="control">
                     <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}} className="input" selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} 
                     />
                  </div>
               </div>
               <div className="field">
                  <div className="control">
                     <DatePicker placeholderText="End Date" className="input"
                     selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} 
                     />
                  </div>
               </div>
            <button className="button" style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
            </form>
            </div>
        <Calendar
          className="ml-4 mr-4 pb-4"
          components={components}
          defaultDate={defaultDate}
          events={allEvents}
          localizer={localizer}
          max={max}
          showMultiDayTimes
          step={60}
          views={views}
        />
      </div>
    </Fragment>
  )
  }
EventCalendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
  showDemoLink: PropTypes.bool,
}

export default EventCalendar;
