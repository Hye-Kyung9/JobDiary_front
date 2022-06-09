import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

export default function ({ isOpen, onClose, onDiaryAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [start, setStart] = useState(new Date());

  const onSubmit = (event) => {
    event.preventDefault();

    onDiaryAdded({
      title,
      content,
      start,
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
        <form className="diary-modal-form" onSubmit={onSubmit}>
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ border: "inset" }}
          />
          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ border: "inset", height: "100px" }}
          />
          <div>
            <label>Date</label>
            <Datetime value={start} onChange={(date) => setStart(date)} />
          </div>
          <button className="add-event-detail">Add Diary</button>
        </form>
      </Modal>
    </>
  );
}

// export default AddEventModal;
