import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions';
import PieChart from './PieChart';
import BarChart from './BarChart'; // Import the BarChart component

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  const renderWidgetContent = () => {
    switch (widget.type) {
      case 'PieChart':
        return <PieChart data={widget.data} />;
      case 'Text':
        return <p>{widget.content}</p>;
      case 'BarChart':
        return (
          <div>
            <BarChart data={widget.data} total={widget.total} />
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
              <p style={{ marginRight: '15px', color: '#003f5c' }}>Critical: {widget.data.Critical}</p>
              <p style={{ marginRight: '15px', color: '#bc5090' }}>High: {widget.data.High}</p>
              <p style={{ marginRight: '15px', color: '#ff6361' }}>Medium: {widget.data.Medium}</p>
              <p style={{ marginRight: '15px', color: '#58508d' }}>Low: {widget.data.Low}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`widget ${widget.isSelected ? 'selected' : ''}`}>
      <h3>{widget.name}</h3>
      {renderWidgetContent()}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Widget;
