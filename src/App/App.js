import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Menu from '../componentsPage/Menu/Menu';
import Main from '../componentsPage/Main/Main';
import Vacancies from '../componentsPage/Vacancies/Vacancies';
import Work from '../componentsPage/Work/Work';


function App() {
  return (
    <div className="app">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/works" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
