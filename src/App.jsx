// src/App.jsx

import React from 'react';
// Importovanje vaše Header komponente
import Header from './components/Header'; 

// Primer navigacionih linkova
const menuLinks = [
  { text: 'Početna', url: '/' },
  { text: 'O nama', url: '/about' },
  { text: 'Kontakt', url: '/contact' },
];

function App() {
  return (
    <div className="App">
      {/*
        Renderovanje Header komponente i prosleđivanje 'props-a'
        'title' i 'navItems' su prilagođeni props-i koje smo definisali.
      */}
      <Header 
        title="Super Aplikacija" 
        navItems={menuLinks} 
      />
      
      <main>
        {/* Ostali sadržaj aplikacije */}
        <h2>Dobrodošli!</h2>
      </main>
    </div>
  );
}

export default App;