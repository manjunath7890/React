import React, { useEffect, useRef} from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Chart from 'chart.js/auto';

const LinearGauge = (props) => {
  const chartContainerRef = useRef(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const ctx = chartContainerRef.current.getContext('2d');

    
    if (chartContainerRef.current.chart) {
      chartContainerRef.current.chart.destroy();
    }
    // const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    // gradient.addColorStop(0.1, '#fa8c16');
    // gradient.addColorStop(0.4, '#00c4c9');

    chartContainerRef.current.chart = new Chart(ctx, {
      type: 'bar', // Consider changing the chart type if needed
      data: {
        labels: [props.label],
        datasets: [
          {
            data: [props.data],
            backgroundColor: colors.greenAccent[500],
          },
        ],
      },
      options: {
        indexAxis: props.index,
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
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
              color: colors.greenAccent[500],
            },
            ticks: {
              color: colors.grey[100], // Use the color state for x-axis tick color
            },
          },
          y: {
            display: props.yAxis,
            grid: {
              color: colors.greenAccent[500],
            },
            ticks: {
              color: colors.grey[100], // Use the color state for y-axis tick color
            },
          },
        },
      },
    });
  }, [props.data, props.xAxis, props.yAxis, props.max, colors]); // Add relevant props and state to the dependency array

  return (
    <div style={{ width: props.width, height: props.height }}>
      <canvas ref={chartContainerRef} />
    </div>
  );
};

export default LinearGauge;
