import React, { useState } from 'react';
import data from './data.js';
import './styles.css';

export default function Accordion() {
  const [selected, setSelected] = useState(new Set());
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSelection = (id) => {
    if (enableMultiSelection) {
      selected.has(id) ? selected.delete(id) : selected.add(id);
      setSelected(new Set(selected));
    } else {
      selected.has(id) ? setSelected(new Set()) : setSelected(new Set([id]));
    }
  };

  return (
    <div className="wrapper">
      <button
        className="button hover:underline hover:-translate-y-1 hover:scale-105 duration-200"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection
          ? 'Disable Multiple Selection'
          : 'Enable Multiple Selection'}
      </button>
      <div className="accordion">
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={`item hover:font hover:-translate-y-1 hover:scale-105 duration-200 ${
                selected.has(dataItem.id) ? 'selected' : ''
              }`}
              key={dataItem.id}
            >
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected.has(dataItem.id) && (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No data found!</p>
        )}
      </div>
    </div>
  );
}
