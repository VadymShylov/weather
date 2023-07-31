import React from 'react';
import videoBg from '../../assets/snow.mp4';
import Geo from 'components/Geo/Geo';
import Card from 'components/Card/Card';
import Quote from 'components/Quote/Quote';

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <div className="app">
          <div className="container">
            <Geo />
            <Card />
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
