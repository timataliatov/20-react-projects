import React, { useState, useEffect, useCallback } from 'react';
import { Pause, Play, Sun, Moon, ArrowRight } from 'lucide-react';
import './styles.css';
const LightDarkMode = () => {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);
  const [isGradientAnimating, setIsGradientAnimating] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleGradientAnimation = () => {
    setIsGradientAnimating(!isGradientAnimating);
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between p-8 relative ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      } transition-all duration-700 ease-in-out overflow-hidden`}
    >
      <div
        className={`absolute inset-0 ${
          isGradientAnimating ? 'animate-gradient' : ''
        }`}
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(-45deg, #1a202c, #2d3748, #4a5568, #718096)'
              : 'linear-gradient(-45deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)',
          backgroundSize: '400% 400%',
        }}
      />
      <div className="mt-28 mr-28 gap-2 z-10 w-full flex justify-end space-x-4">
        <button
          className={`p-2 rounded-full ${
            theme === 'dark'
              ? 'bg-yellow-400 text-gray-900'
              : 'bg-indigo-600 text-white'
          } transition-all duration-300 ease-in-out transform hover:scale-110`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button
          className={`p-2 rounded-full ${
            isGradientAnimating ? 'bg-red-500' : 'bg-green-500'
          } text-white transition-all duration-300 ease-in-out transform hover:scale-110`}
          onClick={toggleGradientAnimation}
        >
          {isGradientAnimating ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
      <div className="container text-center z-10 flex flex-col items-center">
        <h1 className="text-6xl font-black mb-8 tracking-tight">
          Hello World!
        </h1>
        <p className="text-xl mb-8 max-w-md">
          Toggle the sun/moon to switch themes, and use the play/pause button to
          control the gradient animation.
        </p>
        <p>[sometimes it's not starting, so make sure to refresh the page]</p>
        <div className="grid grid-cols-2 gap-10 pt-24">
          <div
            className={`p-12 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-16">Feature 1</h2>
            <p>This is a cool feature of our app.</p>
          </div>
          <div
            className={`p-12 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-16">Feature 2</h2>
            <p>Another awesome feature you'll love.</p>
          </div>
        </div>
      </div>
      <footer className="z-10 mt-8 text-sm opacity-70">
        © 2024 All rights reserved. [20RC by TALIATOV]
      </footer>
    </div>
  );
};

export default LightDarkMode;
