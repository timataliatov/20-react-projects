import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Sidebar } from 'lucide-react';

const navItems = [
  {
    name: 'UI Components',
    subitems: [
      { name: 'Accordion', href: '#accordion' },
      { name: 'Star Rating', href: '#star-rating' },
      { name: 'Image Slider', href: '#image-slider' },
      { name: 'Load More Button', href: '#load-more' },
      { name: 'Tree View / Menu UI', href: '#tree-view' },
      { name: 'Scroll Indicator', href: '#scroll-indicator' },
      { name: 'Tabs', href: '#tabs' },
      { name: 'Modal Popup', href: '#modal-popup' },
    ],
  },
  {
    name: 'Tools and Generators',
    subitems: [
      {
        name: 'Random Color Generator',
        href: '#color-generator',
      },
      { name: 'QR Code Generator', href: '#qr-code' },
      {
        name: 'Github Profile Finder',
        href: '#github-finder',
      },
      {
        name: 'Search Autocomplete',
        href: '#search-autocomplete',
      },
      {
        name: 'Feature Flag Implementation',
        href: '#feature-flag',
      },
    ],
  },
  {
    name: 'Theme and Layout',
    subitems: [
      { name: 'Light and Dark Mode', href: '#theme-switch' },
      {
        name: 'Scroll to Top and Bottom',
        href: '#scroll-top-bottom',
      },
      {
        name: 'Scroll to Particular Section',
        href: '#scroll-section',
      },
    ],
  },
  {
    name: 'Custom Hooks',
    href: '#hooks',
    subitems: [
      { name: 'useFetch Custom Hook', href: '#use-fetch' },
      {
        name: 'useOnclickOutside Custom Hook',
        href: '#use-onclick-outside',
      },
      {
        name: 'useWindowResize Custom Hook',
        href: '#use-window-resize',
      },
    ],
  },
  {
    name: 'Apps',
    subitems: [
      { name: 'Tic Tac Toe', href: '#tic-tac-toe' },
      { name: 'Weather App', href: '#weather-app' },
      { name: 'Food Recipe App', href: '#food-recipe' },
      { name: 'Shopping Cart App', href: '#shopping-cart' },
      {
        name: 'Expense Tracker App',
        href: '#expense-tracker',
      },
      { name: 'Mern Stack Blog App', href: '#mern-blog' },
    ],
  },
];

const Navbar = ({ toggleTreeView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          navLinks[index].classList.add('text-blue-500');
        } else {
          navLinks[index].classList.remove('text-blue-500');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              #20RC by TALIATOV
            </a>
            <button
              onClick={toggleTreeView}
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <Sidebar className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => handleDropdown(index)}
                    className="nav-link text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {item.subitems.map((subitem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subitem.href}
                            onClick={() => scrollToSection(subitem.href)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {subitem.name}{' '}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleDropdown(index)}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
                {activeDropdown === index && (
                  <div className="pl-4">
                    {item.subitems.map((subitem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subitem.href}
                        onClick={() => scrollToSection(subitem.href)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subitem.name}{' '}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
