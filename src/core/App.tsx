import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
import { Lesson } from "../pages/Lesson/Lesson";
import { Auth } from "../pages/auth/Auth";
import { Lending } from "../pages/lending/Lending";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path='/' element={<Lending />} />
        <Route path='/LessonsList' element={<Lesson />} />
        <Route path='/Auth' element={<Auth />} />
      </Routes>
    </section>
  );
}

export default App;