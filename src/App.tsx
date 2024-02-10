import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./nav";
import Table from './table';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/meetings" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
