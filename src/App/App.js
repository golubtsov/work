import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from '../componentsPage/Menu/Menu';
import Main from '../componentsPage/Main/Main';
import Vacancies from '../componentsPage/Vacancies/Vacancies';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vavncies" element={<Vacancies />} />
      </Routes>
    </div>
  );
}

export default App;
