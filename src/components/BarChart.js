import React from 'react';

const BarChart = ({ data, total }) => {
  const calculateWidth = (value) => {
    return (value / total) * 100;
  };

  return (
    <div style={{ display: 'flex', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          backgroundColor: '#003f5c',
          width: `${calculateWidth(data.Critical)}%`,
          display: data.Critical ? 'block' : 'none'
        }}
        title={`Critical: ${data.Critical}`}
      />
      <div
        style={{
          backgroundColor: '#bc5090',
          width: `${calculateWidth(data.High)}%`,
          display: data.High ? 'block' : 'none'
        }}
        title={`High: ${data.High}`}
      />
      <div
        style={{
          backgroundColor: '#ff6361',
          width: `${calculateWidth(data.Medium)}%`,
          display: data.Medium ? 'block' : 'none'
        }}
        title={`Medium: ${data.Medium}`}
      />
      <div
        style={{
          backgroundColor: '#58508d',
          width: `${calculateWidth(data.Low)}%`,
          display: data.Low ? 'block' : 'none'
        }}
        title={`Low: ${data.Low}`}
      />
    </div>
  );
};

export default BarChart;
