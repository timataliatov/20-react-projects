import React from 'react';
import Accordion from './components/accordion/index.jsx';
import RandomColors from './components/randomColors/index.jsx';
import StarRating from './components/starRating/index.jsx';

function App() {
  return (
    <div className="">
      {/* StarRating Component */}
      {<StarRating />}

      {/* Accordion Component */}
      {<Accordion />}

      {/* RandomColors Component */}
      {<RandomColors />}

      {/* ... Component */}
      {/* <... /> */}

      {/* ... Component */}
      {/* <... /> */}
    </div>
  );
}

export default App;
