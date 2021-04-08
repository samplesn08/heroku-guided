import './App.css';
import React, { useState, useEffect } from 'react';

const url = (path) => {
  return process.env.NODE_ENV === "development"
  ? `http://localhost:5000${path}` : path
}

function App() {
  const [data, setData] = useState("Hi");
  useEffect(() => {
    fetch(url("/api/"))
    .then(res=>res.json())
    .then(apiData => setData(apiData.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
