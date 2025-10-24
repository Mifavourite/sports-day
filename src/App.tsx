import React from "react";

// Components
const EventHeader = () => <h1>🏟️ Sports Day Schedule</h1>;
const EventLocation = () => (
  <>
    <h2>📍 Location</h2>
    <p>Main Stadium, City Sports Complex</p>
  </>
);
const EventList = () => (
  <ul>
    <li>100m Sprint – 9:00 AM</li>
    <li>Long Jump – 10:00 AM</li>
    <li>Relay Race – 11:00 AM</li>
  </ul>
);
const EventFooter = () => <p>🎉 See you there! Don’t forget your water bottle 💧</p>;

// Main App
function App() {
  return (
    <div>
      <EventHeader />
      <EventLocation />
      <EventList />
      <EventFooter />
    </div>
  );
}

export default App;
