import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const BarChart = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'average current',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 48, 52]
        },
        {
          name: 'average speed',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 58, 63]
        },
        {
          name: 'distance travelled',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 58, 63]
        },
        {
          name: 'controller temperature',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 58, 63]
        },
        {
            name: 'motor temperature',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 48]
        },
      ],
      chart: {
        type: 'bar',
        height: 340,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
      },
      yaxis: {
        title: {
          text: 'values'
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return <div id="chart" />;
};

export default BarChart;
