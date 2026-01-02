
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SalesPage from './pages/SalesPage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
