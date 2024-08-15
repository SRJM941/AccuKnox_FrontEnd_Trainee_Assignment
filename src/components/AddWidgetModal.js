import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';

const AddWidgetModal = ({ categoryId, closeModal }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('Text');
  const [widgetContent, setWidgetContent] = useState('');
  const [widgetData, setWidgetData] = useState({
    Critical: '',
    High: '',
    Medium: '',
    Low: '',
  });

  const dispatch = useDispatch();

  const handleAdd = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      type: widgetType,
      ...(widgetType === 'Text'
        ? { content: widgetContent }
        : widgetType === 'PieChart'
        ? {
            data: {
              Connected: Math.floor(Math.random() * 10),
              'Not Connected': Math.floor(Math.random() * 10),
            },
          }
        : {
            data: {
              Critical: parseInt(widgetData.Critical) || 0,
              High: parseInt(widgetData.High) || 0,
              Medium: parseInt(widgetData.Medium) || 0,
              Low: parseInt(widgetData.Low) || 0,
            },
            total: parseInt(widgetData.Critical) + parseInt(widgetData.High) + parseInt(widgetData.Medium) + parseInt(widgetData.Low),
          }),
    };
    dispatch(addWidget(categoryId, newWidget));
    closeModal();
  };

  const renderFormFields = () => {
    const inputStyle = {
      width: '90%',
      padding: '10px',
      margin: '8px 0px 0px 2px',
      borderRadius: '5px',
      border: '2px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontSize: '16px',
    };
  
    if (categoryId === 2) {
      // If the category is "Registry Scan", show fields for BarChart
      return (
        <>
          <input
            type="number"
            placeholder="Critical Issues"
            style={inputStyle}
            value={widgetData.Critical}
            onChange={(e) => setWidgetData({ ...widgetData, Critical: e.target.value })}
          />
          <input
            type="number"
            placeholder="High Issues"
            style={inputStyle}
            value={widgetData.High}
            onChange={(e) => setWidgetData({ ...widgetData, High: e.target.value })}
          />
          <input
            type="number"
            placeholder="Medium Issues"
            style={inputStyle}
            value={widgetData.Medium}
            onChange={(e) => setWidgetData({ ...widgetData, Medium: e.target.value })}
          />
          <input
            type="number"
            placeholder="Low Issues"
            style={inputStyle}
            value={widgetData.Low}
            onChange={(e) => setWidgetData({ ...widgetData, Low: e.target.value })}
          />
        </>
      );
    } else {
      // Default form fields
      return widgetType === 'Text' ? (
        <input
          type="text"
          placeholder="Widget Content"
          style={inputStyle}
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
        />
      ) : null;
    }
  };
  
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <select value={widgetType} onChange={(e) => setWidgetType(e.target.value)}>
          <option value="Text">Text</option>
          <option value={categoryId === 2 ? 'BarChart' : 'PieChart'}>
            {categoryId === 2 ? 'BarChart' : 'PieChart'}
          </option>
        </select>
        {renderFormFields()}
        <button onClick={handleAdd}>Add Widget</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
