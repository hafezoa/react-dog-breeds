import React, { useState, useEffect } from 'react';
import { Breeds } from './components/Breeds';
import zip from 'lodash.zip';

import axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
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

      const breedWithImage = zip(
        Object.keys(response.data.message),
        dogImageData.map((dog) => dog.data.message),
      ).flatMap((a, b) => ({
        name: a[0],
        image: a[1],
      }));
      setData(breedWithImage);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Dog Breed Directory</header>
      <Breeds breeds={data} />
    </div>
  );
}

export default App;
