import React, { useState } from 'react';
import Navbar from './components/navBar/index.jsx';
import Accordion from './components/accordion/index.jsx';
import StarRating from './components/starRating/index.jsx';
import RandomColors from './components/randomColors/index.jsx';
import ImageSlider from './components/imageSlider/index.jsx';
import LoadMoreData from './components/load-more-data/index.jsx';
import { TreeView, sampleMenus } from './components/treeView/index.jsx';
import Backdrop from './components/Backdrop.jsx';
import QrCodeGenerator from './components/qr-code-generator/index.jsx';
import LightDarkMode from './components/light-dark-mode/index.jsx';

function App() {
  const [showTreeView, setShowTreeView] = useState(false);

  const toggleTreeView = () => {
    setShowTreeView(!showTreeView);
  };

  return (
    <div className="app-container">
      <Navbar toggleTreeView={toggleTreeView} />
      <Backdrop isVisible={showTreeView} onClick={toggleTreeView} />
      <TreeView menus={sampleMenus} isVisible={showTreeView} />

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
        <div id="image-slider">
          <ImageSlider
            url={'https://picsum.photos/v2/list'}
            page={1}
            limit={10}
          />
        </div>
        <div id="load-more">
          <LoadMoreData />
        </div>
        <div id="qr-code">
          <QrCodeGenerator />
        </div>
        <div id="theme-switch">
          <LightDarkMode />
        </div>
      </main>
    </div>
  );
}

export default App;
