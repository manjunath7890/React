import React from 'react';

const BatteryIndicator = ({ efficiency, colorFill, colorEmpty }) => {
  // Calculate the number of filled cells based on efficiency (assuming efficiency is between 0 and 100)
  const filledCells = Math.ceil((100 / 100) * 5);
  const emptyCells = 5 - filledCells;

  return (
    <div >
      {efficiency}%
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginRight:'' }}>
      {/* Render filled cells */}
      {[...Array(filledCells)].map((_, index) => (
        <div
          key={index}
          style={{
            width: '0.7rem',
            height: '1.5rem',
            backgroundColor: colorFill,
            marginRight: '2px',
            borderRadius: '2px',
          }}
        />
      ))}

      {/* Render empty cells */}
      {[...Array(emptyCells)].map((_, index) => (
        <div
          key={index}
          style={{
            width: '0.7rem',
            height: '1.5rem',
            backgroundColor: colorEmpty,
            marginRight: '2px',
            borderRadius: '2px',
          }}
        />
      ))} 
    </div>
       
    </div>
  );
};

export default BatteryIndicator;
