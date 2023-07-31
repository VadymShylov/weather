import React from 'react';

const DateNow = () => {
  let today = new Date();

  let date = today.toDateString();

  return <p>{date}</p>;
};

export default DateNow;
