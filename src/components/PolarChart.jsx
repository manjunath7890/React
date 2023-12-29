import React, {useState, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { Grid, CardContent, makeStyles, Box } from "@material-ui/core";

const PolarAreaChart = ({d}) => {
  const chartRef = useRef(null);
  const defaultData = {
    avgWhrkmat10SOC: 0,
    avgWhrkmat20SOC: 0,
    avgWhrkmat30SOC: 0,
    avgWhrkmat40SOC: 0,
    avgWhrkmat50SOC: 0,
    avgWhrkmat60SOC: 0,
    avgWhrkmat70SOC: 0,
    avgWhrkmat80SOC: 0,
    avgWhrkmat90SOC: 0,
    avgWhrkmat100SOC: 0,
  }

  const [data, setData] = useState(d || defaultData);

  useEffect(() => {

    if (d) {
      setData(d);
      console.log(d)
    }
    const options = {

      series: [data.avgWhrkmat10SOC, data.avgWhrkmat20SOC, data.avgWhrkmat30SOC, data.avgWhrkmat40SOC, data.avgWhrkmat50SOC, data.avgWhrkmat60SOC, data.avgWhrkmat70SOC, data.avgWhrkmat80SOC, data.avgWhrkmat90SOC, data.avgWhrkmat100SOC],
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
  }, [data, d]);

  return (
    <div style={{ width: '100%', height: '300px' }} ref={chartRef} />
  );
};

export default PolarAreaChart;
