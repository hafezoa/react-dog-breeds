import React from 'react';
import './Filter.css';

export const Filter = ({ value, handleChange }) => {
  return (
    <div className="filter">
      <p className="subHeader">Search for a dog breed by name!</p>
      <input
        className="input"
        value={value}
        onChange={handleChange}
        placeholder="Type a name"
      />
    </div>
  );
};
