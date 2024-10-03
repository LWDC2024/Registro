import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatalogList from './components/CatalogList';
import CatalogItem from './components/CatalogItem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Catalog Management System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CatalogList />} />
            <Route path="/item/:id" element={<CatalogItem />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;