import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';

const TimeNow = () => {
  return (
    <p>
      <Moment format="LTS " interval={1000}></Moment>
    </p>
  );
};

export default TimeNow;
