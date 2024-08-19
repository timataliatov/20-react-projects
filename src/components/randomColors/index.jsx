import React, { useState } from 'react';
import './styles.css';

const RandomColors = () => {
  const [hex, setHex] = useState('#ffffff');
  const [rgb, setRgb] = useState('rgb(255, 255, 255)');

  const handleHexChange = () => {
    const newHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(newHex);
  };

  const handleRgbChange = () => {
    const newR = Math.floor(Math.random() * 256);
    const newG = Math.floor(Math.random() * 256);
    const newB = Math.floor(Math.random() * 256);
    const newRgb = `rgb(${newR}, ${newG}, ${newB})`;
    setRgb(newRgb);
  };

  const handleReset = () => {
    setHex('#ffffff');
    setRgb('rgb(255, 255, 255)');
  };

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 justify-center items-center">
        <div
          style={{ backgroundColor: hex }}
          className="w-1/2 h-full border-r-2 border-black"
        >
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-6xl">{hex}</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={handleHexChange}
            >
              Generate Hex
            </button>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={() => handleCopy(hex)}
            >
              Copy
            </button>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div style={{ backgroundColor: rgb }} className="w-1/2 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-6xl">{rgb}</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={handleRgbChange}
            >
              Generate RGB
            </button>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={() => handleCopy(rgb)}
            >
              Copy
            </button>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomColors;
