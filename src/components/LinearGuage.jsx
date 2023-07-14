import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LinearGauge = (props) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const ctx = chartContainerRef.current.getContext('2d');

    if (chartContainerRef.current.chart) {
      chartContainerRef.current.chart.destroy();
    }

    chartContainerRef.current.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [props.label],
        datasets: [
          {
            data: [props.data],
            backgroundColor: '#0ff',
          },
        ],
      },
      options: {
        indexAxis: props.index,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          bar: {
            borderWidth: 0,
          },
        },
        scales: {
          x: {
            display: props.xAxis,
            min: 0,
            max: props.max,
            grid: {
              color: 'aqua',
            },
            ticks: {
              color: 'white', 
            },
          },
          y: {
            display: props.yAxis,
            grid: {
              color: 'aqua', 
            },
            ticks: {
              color: 'white', 
            },
          },
        },
      },
    });
  }, []);

  return (
    <div style={{ width: props.width, height: props.height }}>
      <canvas ref={chartContainerRef} />
    </div>
  );
};

export default LinearGauge;
