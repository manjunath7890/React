import React from 'react';

const LinearGauge = ({ value, min, max, width, height, color1, color2 }) => {
  const calculatePercentage = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  const gaugeStyle = {
    width: `${height}%`,
    height: `${width}px`,
    backgroundColor: color2,
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom:'10px'
  };

  const progressStyle = {
    width: `${calculatePercentage(value, min, max)}%`,
    height: '100%',
    backgroundColor: color1,
    transition: 'width 0.5s ease',
  };

  return (
    <div style={gaugeStyle}>
      <div style={progressStyle}></div>
      <div style={progressStyle}></div>
    </div>
  );
};

export default LinearGauge;
