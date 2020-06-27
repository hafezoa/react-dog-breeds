import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState({ breeds: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://dog.ceo/api/breeds/list/all',
      );
      setData(response.data.message);
      // console.log(response.data.message);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">React Dog Breeds</header>
      <ul>{console.log(data)}</ul>
      <p>by Omar Hafez</p>
    </div>
  );
}

export default App;
