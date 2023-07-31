import React from 'react';

const Search = ({ value, name, onChange, onSubmit }) => {
  return (
    <div className="search">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          name={name}
          onChange={onChange}
          placeholder="Location"
          autoComplete="off"
        />
        <button type='submit' className="button">Search</button>
      </form>
    </div>
  );
};

export default Search;
