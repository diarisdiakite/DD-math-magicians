import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Header from './components/pagesComponents/Header';
import HomePage from './components/pages/HomePage';
import Quotes from './components/childComponents/Quotes';
import Calculator from './components/childComponents/Calculator';
// import CalculatorPage from './components/pages/CalculatorPage';
// import QuotePage from './components/pages/QuotePage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="*" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
