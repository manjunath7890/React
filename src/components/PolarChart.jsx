import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { Grid, CardContent, makeStyles, Box } from "@material-ui/core";

const PolarAreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21, 6],
      chart: {
        type: 'polarArea'
      },
      labels: ['wh/km-10km', 'wh/km-20km', 'wh/km-30km', 'wh/km-40km', 'wh/km-50km', 'wh/km-60km', 'wh/km-70km', 'wh/km-80km', 'wh/km-90km', 'wh/km-100km'],
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%' // Adjust the width to take the full container's width
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '300px' }} ref={chartRef} />
  );
};

export default PolarAreaChart;
