import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const QuarteredCircularGauge = ({ value, maxValue }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const ctx = chartContainerRef.current.getContext('2d');

    if (chartContainerRef.current.chart) {
      chartContainerRef.current.chart.destroy();
    }

    chartContainerRef.current.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [
          {
            data: [value, maxValue - value],
            backgroundColor: ['aqua', 'transparent'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
        rotation: -Math.PI / 2,
        circumference: Math.PI / 2,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      },
    });
  }, [value, maxValue]);

  return (
    <div>
      <canvas ref={chartContainerRef} />
    </div>
  );
};

export default QuarteredCircularGauge;
