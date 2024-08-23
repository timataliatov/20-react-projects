import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw, Copy, RotateCcw, Palette, Check } from 'lucide-react';

const ColorSection = ({
  color,
  label,
  onGenerate,
  onCopy,
  onReset,
  contrast,
}) => {
  const [selectedFormat, setSelectedFormat] = useState('hex');

  const getFormattedColor = () => {
    if (selectedFormat === 'hex')
      return color.startsWith('#') ? color : `#${color}`;
    if (selectedFormat === 'rgb') {
      const [r, g, b] = color.startsWith('#')
        ? [
            parseInt(color.slice(1, 3), 16),
            parseInt(color.slice(3, 5), 16),
            parseInt(color.slice(5, 7), 16),
          ]
        : color.match(/\d+/g).map(Number);
      return `rgb(${r}, ${g}, ${b})`;
    }
    if (selectedFormat === 'hsl') {
      const [r, g, b] = color.startsWith('#')
        ? [
            parseInt(color.slice(1, 3), 16),
            parseInt(color.slice(3, 5), 16),
            parseInt(color.slice(5, 7), 16),
          ]
        : color.match(/\d+/g).map(Number);
      const [h, s, l] = rgbToHsl(r, g, b);
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  };

  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{label}</h2>
        <div
          className="w-12 h-12 rounded-full border-4 border-white shadow-inner"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div className="mb-4">
        <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          className="bg-white bg-opacity-20 text-white rounded p-2 w-full"
        >
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
          <option value="hsl">HSL</option>
        </select>
      </div>
      <p className="text-xl font-mono mb-2 text-white break-all">
        {getFormattedColor()}
      </p>
      {typeof contrast === 'number' && (
        <p
          className={`text-sm mb-4 ${
            contrast > 4.5 ? 'text-green-300' : 'text-red-300'
          }`}
        >
          Contrast ratio: {contrast.toFixed(2)}{' '}
          {contrast > 4.5 ? '(Accessible)' : '(Not accessible)'}
        </p>
      )}
      <div className="flex space-x-2">
        <Button onClick={onGenerate} icon={<RefreshCw size={16} />}>
          Generate
        </Button>
        <Button
          onClick={() => onCopy(getFormattedColor())}
          icon={<Copy size={16} />}
        >
          Copy
        </Button>
        <Button onClick={onReset} icon={<RotateCcw size={16} />}>
          Reset
        </Button>
      </div>
    </div>
  );
};

const Button = ({ children, onClick, icon }) => (
  <button
    className="flex items-center justify-center px-3 py-2 bg-white bg-opacity-20 text-white text-sm rounded-md hover:bg-opacity-30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
    onClick={onClick}
  >
    {icon && <span className="mr-1">{icon}</span>}
    {children}
  </button>
);

const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

const RandomColors = () => {
  const [leftColor, setLeftColor] = useState('#ffffff');
  const [rightColor, setRightColor] = useState('rgb(255, 255, 255)');
  const [leftContrast, setLeftContrast] = useState(null);
  const [rightContrast, setRightContrast] = useState(null);
  const [palette, setPalette] = useState([]);
  const [copied, setCopied] = useState(false);

  const generateHex = useCallback(() => {
    const newHex =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    setLeftColor(newHex);
  }, []);

  const generateRgb = useCallback(() => {
    const newR = Math.floor(Math.random() * 256);
    const newG = Math.floor(Math.random() * 256);
    const newB = Math.floor(Math.random() * 256);
    setRightColor(`rgb(${newR}, ${newG}, ${newB})`);
  }, []);

  const handleReset = useCallback(() => {
    setLeftColor('#ffffff');
    setRightColor('rgb(255, 255, 255)');
  }, []);

  const handleCopy = useCallback((color) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const calculateContrast = useCallback((color) => {
    const rgb = color.startsWith('#')
      ? [
          parseInt(color.slice(1, 3), 16),
          parseInt(color.slice(3, 5), 16),
          parseInt(color.slice(5, 7), 16),
        ]
      : color.match(/\d+/g).map(Number);

    const luminance = rgb
      .map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      })
      .reduce((a, b) => a * 0.2126 + b * 0.7152 + b * 0.0722);

    return Math.max(luminance, 0.05) / Math.min(luminance, 0.05);
  }, []);

  const generatePalette = useCallback(() => {
    const baseColor = leftColor.slice(1);
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=analogic&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setPalette(data.colors.map((c) => c.hex.value));
      })
      .catch((error) => console.error('Error generating palette:', error));
  }, [leftColor]);

  useEffect(() => {
    setLeftContrast(calculateContrast(leftColor));
  }, [leftColor, calculateContrast]);

  useEffect(() => {
    setRightContrast(calculateContrast(rightColor));
  }, [rightColor, calculateContrast]);

  return (
    <div className="relative overflow-hidden">
      <div className="min-h-screen flex">
        <div className="flex-1" style={{ backgroundColor: leftColor }}></div>
        <div className="flex-1" style={{ backgroundColor: rightColor }}></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-4xl w-full">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">
              Color Generator
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              <ColorSection
                color={leftColor}
                label="Left Color"
                onGenerate={generateHex}
                onCopy={handleCopy}
                onReset={handleReset}
                contrast={leftContrast}
              />
              <ColorSection
                color={rightColor}
                label="Right Color"
                onGenerate={generateRgb}
                onCopy={handleCopy}
                onReset={handleReset}
                contrast={rightContrast}
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-white">
                Color Palette Suggestion
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button onClick={generatePalette} icon={<Palette size={16} />}>
                  Generate Palette
                </Button>
                <div className="flex flex-wrap gap-2">
                  {palette.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md"
                      style={{ backgroundColor: color }}
                      onClick={() => handleCopy(color)}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {copied && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <Check size={16} className="mr-2" /> Color copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomColors;
