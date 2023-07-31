import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <>
      <div className="temp">
        <h1 className="title">{data.main.temp.toFixed(1)}&#176;C</h1>
      </div>
      <h1 className="title">{data.name}</h1>
      {data.weather.map(({ description, id }) => (
        <div className="description" key={id}>
          <p>{description}</p>
        </div>
      ))}
      <div className="bottom">
        <div className="feels">
          {data.main ? (
            <p className="bold">{data.main.feels_like.toFixed()}&#176;</p>
          ) : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>

        <div className="wind">
          {data.wind ? (
            <p className="bold">{data.wind.speed.toFixed()} MPH</p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
