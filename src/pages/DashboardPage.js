import React from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

import WidgetSelector from "../components/WidgetSelector";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categories, searchQuery } = useSelector((state) => state);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets
      .filter((widget) => widget.visible) // Only include visible widgets
      .filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
  }));

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="temp">
        <div>
          <SearchBar />
        </div>
        <div>
          <button onClick={openModal} className='edit'> Edit Category + </button>
          <WidgetSelector isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      {filteredCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DashboardPage;
