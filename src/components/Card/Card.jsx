import Search from 'components/Search/Search';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import { getWeather } from 'components/services/api';
import React, { useState } from 'react';

const Card = () => {
  const [query, setQuery] = useState('');
  const [dataSearch, setDataSearch] = useState('');

  const handleChange = e => {
    const search = e.target.value.trim();
    setQuery(search);
  };
  const handleKeyPress = e => {
    e.preventDefault();
    if (query === '') {
      return alert('fill up search input');
    }
    getWeather(query)
      .then(res => setDataSearch(res))
      .catch(error => console.log(error));

    setQuery('');
  };
  console.log(dataSearch);
  return (
    <>
      <Search onChange={handleChange} onSubmit={handleKeyPress} value={query} />

      {!dataSearch ? '' : <WeatherCard data={dataSearch} />}
    </>
  );
};

export default Card;
