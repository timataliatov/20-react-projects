import React from 'react';

const Backdrop = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-35 z-40"
      onClick={onClick}
    />
  );
};

export default Backdrop;
