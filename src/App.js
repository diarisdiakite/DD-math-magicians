import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/pagesComponents/Header';
import HomePage from './components/pages/HomePage';
import CalculatorPage from './components/pages/CalculatorPage';
import QuotePage from './components/pages/QuotePage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="*" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
