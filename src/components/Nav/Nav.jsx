import DateNow from 'components/DateNow/DateNow';
import TimeNow from 'components/Time/TimeNow';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import { getWeatherPosition } from 'components/services/api';
import React, { useEffect, useState } from 'react';

const Nav = ({ latitude, longitude }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!latitude || !longitude) return;
    getWeatherPosition(latitude, longitude)
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, [latitude, longitude]);

  return (
    <div className="top">
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="location">
            <TimeNow />
            <DateNow />
          </div>
          <WeatherCard data={data} />
        </>
      )}
    </div>
  );
};

export default Nav;
