import React, { useState } from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import "./style.css"

const API_KEY = "AIzaSyBEq0-dxRfhangJJ8wC-v0hkAjeYqjLS2E";

let calendars = [
  {
    calendarId: "babyanetworkserviceabsoulute@gmail.com",
    color: "#B241D1",
  }
];

let styles = {
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `,
};

const language = "ID";

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="App">
      <div>
        {selectedEvent && (
          <div>
            <h3>Detail Acara:</h3>
            <p>Judul: {selectedEvent.title}</p>
            <p>Deskripsi: {selectedEvent.description}</p>
            <p>Waktu: {selectedEvent.start} - {selectedEvent.end}</p>
          </div>
        )}
      </div>
      <div
        style={{
          width: "90%",
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "auto",
          maxWidth: "1200px"

        }}
      >
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}
