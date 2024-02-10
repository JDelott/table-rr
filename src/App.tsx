import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./nav";
import Table from './table';
import SplashPage from './SplashPage';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
         <Route path="/" element={<SplashPage />} />
        <Route path="/meetings" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
