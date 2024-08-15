// src/components/Category.js

import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-container">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
        <div className="add-widget-container">
          <button className="add-widget-button" onClick={() => setModalOpen(true)}>
            + Add Widget
          </button>
        </div>
      </div>
      {isModalOpen && (
        <AddWidgetModal categoryId={category.id} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Category;
