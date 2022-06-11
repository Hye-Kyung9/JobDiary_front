import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { Button } from "react-bootstrap";
// import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import ViewList from "./ViewList";
import AddEventModal from "./AddEventModal";
import AddDiaryModal from "./AddDiaryModal";
import axios from "axios";
import moment from "moment";

const MyCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [diaryOpen, setDiaryOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("event_id") === null) {
      localStorage.setItem("event_id", 0);
    }
  }, [events]);

  const onDiaryAdded = (diary) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(diary.start).toDate(),
      content: diary.content,
      title: diary.title,
    });
  };

  // 달력에 이벤트 그려주는 함수
  const onEventAdded = async (event) => {
    const calendarApi = calendarRef.current.getApi();
    const data = {
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
      id: localStorage.getItem("event_id"),
    };

    calendarApi.addEvent(data);
    localStorage.setItem(
      "event_id",
      Number(localStorage.getItem("event_id")) + 1
    );
  };

  // db에 이벤트 저장하는 함수
  async function handleEventAdd(data) {
    await axios.post(
      "http://localhost:4000/api/calendar/create-event",
      data.event
    );
    setEvents(events);
  }

  // 이벤트 클릭하면 지워주는 함수, 뷰와 db 모두 반영
  const eventClick = async (data) => {
    const calendarApi = calendarRef.current.getApi();
    await axios.get(
      "http://localhost:4000/api/calendar/remove-event?id=" +
        data.event._def.publicId
    );

    calendarApi.getEventById(data.event._def.publicId) &&
      calendarApi.getEventById(data.event._def.publicId).remove();
    setEvents(events.filter((item) => item.id != data.event._def.publicId));
  };

  // 캘린더 로드 시 db에 저장된 이벤트 가져오는 함수
  async function handleDateSet(data) {
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
        <Button className="add-diary" onClick={() => setDiaryOpen(true)}>
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
          eventClick={eventClick}
          dayMaxEvents={true}
          moreLinkClick="popover"
          contentHeight="800px"
          eventDisplay="block"
          eventBackgroundColor="#1864ab"
          selectable={true}
          // selectHelper={true}
        />
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onEventAdded={(event) => onEventAdded(event)}
        />
        <AddDiaryModal
          isOpen={diaryOpen}
          onClose={() => setDiaryOpen(false)}
          onEventAdded={(event) => onDiaryAdded(event)}
        />

        <ViewList />
      </section>
    </>
  );
};

export default MyCalendar;
