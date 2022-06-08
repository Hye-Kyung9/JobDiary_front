import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import { Button } from "react-bootstrap";
// import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import ViewList from "./ViewList";
import AddEventModal from "./AddEventModal";
import axios from "axios";
import moment from "moment";

const MyCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  const eventClick = (data) => {
    console.log(data);
  };

  async function handleEventAdd(data) {
    await axios.post(
      "http://localhost:4000/api/calendar/create-event",
      data.event
    );
  }

  async function handleDateSet(data) {
    console.log(data);
    const response = await axios.get(
      "http://localhost:4000/api/calendar/get-events?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString()
    );
    setEvents(response.data);
  }

  return (
    <>
      <section>
        <Button className="add-event" onClick={() => setModalOpen(true)}>
          Add Event
        </Button>
        <Button className="add-diary" onClick={() => setModalOpen(true)}>
          Add Diary
        </Button>
        {/* <div style={{ position: "relative", zIndex: 0 }}></div> */}
        <FullCalendar
          events={events}
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDateSet(date)}
          dayMaxEvents={true}
          moreLinkClick="popover"
          contentHeight="800px"
          eventDisplay="block"
          eventBackgroundColor="#1864ab"
          selectable={true}
          selectHelper={true}
          eventClick={eventClick}
        />
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        />
        <ViewList />
      </section>
    </>
  );
};

export default MyCalendar;
