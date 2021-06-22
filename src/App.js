import React, { useState, useEffect } from 'react';
import { Breeds } from './components/Breeds';

import axios from 'axios';

import loadingPuppy from './loadingPuppy.gif';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const response = await axios(
        'https://dog.ceo/api/breeds/list/all',
      );

      const dogImageData = await Promise.all(
        Object.keys(response.data.message).map(
          async (name) =>
            await axios(
              `https://dog.ceo/api/breed/${name}/images/random`,
            ),
        ),
      );

      const breedWithImage = Object.keys(response.data.message).map((name, idx) => ({ name, image: dogImageData[idx].data.message }))

      setData(breedWithImage);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">React Dog Breeds</header>
      {isLoading ? (
        <img src={loadingPuppy} alt="loading puppy" />
      ) : (
        <Breeds breeds={data} />
      )}
    </div>
  );
}

export default App;
