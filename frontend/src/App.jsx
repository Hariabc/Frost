import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Room from './pages/LiveClassHome';

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<LoginPage/>}/>
         <Route path='/student' element={<StudentDashboard/>}/>
         <Route path='/teacher' element={<TeacherDashboard/>}/>
         <Route path='/room/:roomID' element={<Room/>}/>
      </Routes>
    </Router>
  );
}

export default App;
