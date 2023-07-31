import Greeting from 'components/Greeting/Greeting';
import { getQoute } from 'components/services/api';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getQoute()
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {!data.length
        ? ''
        : data.map(({ author, quote }) => (
            <div className="quote" key={author}>
              <h1>
                <Greeting />
              </h1>
              <p>{quote}</p>
              <p>{author}</p>
            </div>
          ))}
    </div>
  );
};

export default Quote;
