// import React from 'react';

import "./App.css";

function Welcome() {
  return <h2>Welcome, People!</h2>;
}

function Button() {
  return <button>Click Me</button>
}

function App() {
  return (
    <div>
      <h1>Codevolution React Cours</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;