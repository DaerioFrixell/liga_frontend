import React from "react";
import Lending from '../view/pages/lending/Lending';
import {
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
import { Lesson } from "../view/pages/Lesson/Lesson";
import { NewFB } from "../view/pages/feedbacks/NewFB";
import { Auth } from "../view/pages/auth/Auth";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path='/' element={<Lending />} />
        <Route path='/LessonsList' element={<Lesson />} />
        <Route path='/Feedbacks' element={<NewFB />} />
        <Route path='/Auth' element={<Auth />} />
      </Routes>
    </section>
  );
}

export default App;
