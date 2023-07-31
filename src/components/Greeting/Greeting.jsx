import React from 'react';

const Greeting = () => {
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return 'Good Morning';
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return 'Good Afternoon';
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return 'Good Evening';
    } else {
      return 'What are you duing up at this hour?';
    }
  };
  return (
    <div>
      <p>{greeting()}</p>
      <h1>Quote:</h1>
    </div>
  );
};

export default Greeting;
