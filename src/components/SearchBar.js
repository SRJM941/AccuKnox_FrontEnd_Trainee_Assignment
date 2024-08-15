import React from 'react';
import { useDispatch } from 'react-redux';
import { searchWidget } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchWidget(e.target.value));
  };

  return (
    <input
      type="text"
      className='searchbar'
      placeholder="Search widgets..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
