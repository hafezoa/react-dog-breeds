import React from 'react';
import './Filter.css';

export const Filter = ({ value, handleChange }) => {
  return (
    <div className="filter">
      <p className="subHeader">Try searching for a dog by name ...</p>
      <input
        className="input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
