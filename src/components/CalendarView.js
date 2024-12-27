import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "./EventModal";
import Dashboard from "./Dashboard"; // Import your Dashboard

function CalendarView() {
  const [events, setEvents] = useState([
    { title: "Highlight Achievements", date: "2024-01-03", type: "Meeting" },
    { title: "Project Update", date: "2024-01-09", type: "Email" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setIsModalOpen(true);
  };

  const addEvent = ({ title, type, notes }) => {
    setEvents([...events, { title, date: selectedDate, type, notes }]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Dashboard /> {/* Include the Dashboard with overdue communications */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map(event => ({
          title: `${event.type}: ${event.title}`,
          date: event.date,
        }))}
        dateClick={handleDateClick}
      />
      {isModalOpen && (
        <EventModal
          onClose={() => setIsModalOpen(false)}
          onSave={addEvent}
        />
      )}
    </div>
  );
}

export default CalendarView;
