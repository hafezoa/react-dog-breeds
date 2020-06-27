import React, { useEffect, useState } from 'react';

import { Filter } from './Filter';

import './Breeds.css';

export const Breeds = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [showFiltered, setFiltered] = useState([]);

  useEffect(() => {
    if (searchWord !== '') {
      let newList = [];

      newList = props.breeds.filter((breed) =>
        breed.name.includes(searchWord.toLowerCase()),
      );
      console.log(newList);
      setFiltered(newList);
    }
  }, [props.breeds, searchWord]);

  const handleChange = (e) => {
    setSearchWord(e);
  };

  return (
    <div className="breedFlex">
      <Filter
        value={searchWord}
        handleChange={(e) => handleChange(e.target.value)}
      />
      {searchWord.length < 1
        ? props.breeds.map((breed, i) => (
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
          ))
        : showFiltered.map((breed, i) => (
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
          ))}
    </div>
  );
};
