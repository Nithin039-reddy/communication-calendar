import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


import CalendarView from "./components/CalendarView";
import AdminDashboard from "./components/Admin/AdminDashboard"; // Import AdminDashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarView />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin route */}
      </Routes>
    </Router>
  );
}

export default App;
