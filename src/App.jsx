import React from 'react';
import Navbar from './components/navBar/index.jsx';
import Accordion from './components/accordion/index.jsx';
import StarRating from './components/starRating/index.jsx';
import RandomColors from './components/randomColors/index.jsx';
// Import other components as they become available
// import ImageSlider from './components/imageSlider/index.jsx';
// import LoadMoreButton from './components/loadMoreButton/index.jsx';
// import TreeView from './components/treeView/index.jsx';
// import ScrollIndicator from './components/scrollIndicator/index.jsx';
// import Tabs from './components/tabs/index.jsx';
// import ModalPopup from './components/modalPopup/index.jsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="pt-16">
        <div id="accordion">
          <Accordion />
        </div>
        <div id="star-rating">
          <StarRating />
        </div>
        <div id="color-generator">
          <RandomColors />
        </div>
      </main>
    </div>
  );
}

export default App;
