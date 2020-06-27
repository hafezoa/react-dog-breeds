import React, { useEffect, useState } from 'react';

import { Filter } from './Filter';

import './Breeds.css';

export const Breeds = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [showFiltered, setFiltered] = useState([]);

  useEffect(() => {
    if (searchWord !== '') {
      setFiltered(
        props.breeds.filter((breed) =>
          breed.name.includes(searchWord.toLowerCase()),
        ),
      );
    }
  }, [props.breeds, searchWord]);

  function renderBreeds(data) {
    return data.map((breed, i) => (
      <ul className="filterList" key={i}>
        <img
          src={breed.image}
          style={{ background: 'red' }}
          width="50"
          height="50"
          alt={breed.name}
        />
        <li>{breed.name}</li>
      </ul>
    ));
  }

  return (
    <div className="breedFlex">
      <Filter
        value={searchWord}
        handleChange={({ target: { value } }) => setSearchWord(value)}
      />
      {searchWord.length < 1
        ? renderBreeds(props.breeds)
        : renderBreeds(showFiltered)}
    </div>
  );
};
