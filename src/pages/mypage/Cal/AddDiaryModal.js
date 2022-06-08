import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

export default function ({ isOpen, onClose, onDiaryAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onDiaryAdded({
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
          <button>Add event</button>
        </form>
      </Modal>
    </>
  );
}

// export default AddEventModal;
