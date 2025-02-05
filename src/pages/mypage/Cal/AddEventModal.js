import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import Footer from "../../../layouts/Footer";
// import { Button } from "react-bootstrap";

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <>
      <Modal
        className="event-modal"
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{ overlay: { position: "absolute", inset: "auto" } }}
        ariaHideApp={false}
      >
        <form className="event-modal-form" onSubmit={onSubmit}>
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label>Start Date</label>
            <Datetime value={start} onChange={(date) => setStart(date)} />
          </div>
          <div>
            <label>End Date</label>
            <Datetime value={end} onChange={(date) => setEnd(date)} />
          </div>
          <button className="add-event-detail">Add event</button>
        </form>
      </Modal>
      <Footer />
    </>
  );
}

// export default AddEventModal;
