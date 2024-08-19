import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChildren = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="py-2">
      <div className="flex items-center justify-between cursor-pointer">
        <span className="text-white">{item.label}</span>
        {item.children && item.children.length > 0 && (
          <button
            onClick={handleToggleChildren}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
          </button>
        )}
      </div>
      {item.children && item.children.length > 0 && isOpen && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

const MenuList = ({ list = [] }) => {
  return (
    <ul className="pl-4 mt-2">
      {list.map((listItem, index) => (
        <MenuItem key={`${listItem.label}-${index}`} item={listItem} />
      ))}
    </ul>
  );
};

const TreeView = ({ menus = [], isVisible }) => {
  return (
    <div
      className={`fixed left-0 top-16 bottom-0 w-64 bg-gray-800 text-white p-4 overflow-y-auto transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <MenuList list={menus} />
    </div>
  );
};

// Sample menu data
const sampleMenus = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Profile',
    to: '/profile',
    children: [
      {
        label: 'Details',
        to: 'details',
        children: [
          {
            label: 'Location',
            to: 'location',
            children: [
              {
                label: 'City',
                to: 'city',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    to: '/settings',
    children: [
      {
        label: 'Account',
        to: 'account',
      },
      {
        label: 'Security',
        to: 'security',
        children: [
          {
            label: 'Login',
            to: 'login',
          },
          {
            label: 'Register',
            to: 'register',
            children: [
              {
                label: 'Random data',
                to: '',
              },
            ],
          },
        ],
      },
    ],
  },
];

export { TreeView, sampleMenus };
