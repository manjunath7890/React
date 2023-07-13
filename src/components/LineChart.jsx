import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const XAXISRANGE = 60000;

let  y1Data1 = 0;



const LineChart = (props) => {

  y1Data1 = parseInt(props.data.var4);
  const colorGreen = props.color.green;
  const colorBlue = props.color.blue;
  const colorGrey = props.color.grey;

  const [series1, setSeries1] = useState([
    {
      name: "value 1",
      data: [],
    },

  ]);

  const [options1] = useState({
    chart: {
      id: "realtime1",
      height: 320,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [colorBlue],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    title: {
      text: "Line Chart",
      align: "left",
      style: {
        color: colorBlue, 
        fontSize: '14px' 
      }
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
      labels: {
        formatter: (val, timestamp) => {
          return new Date(timestamp).toLocaleTimeString('en-IN');
        },
        style: {
          colors: colorGreen 
        }
      },
    },
    yaxis: [
      {
        max: 50,
        title: {
          text: "value 1",
          style: {
            color: colorGreen,
          }
        },
        labels: {
          style: {
            colors: colorBlue
          }
        }
      },
      
    ],
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "center",
      onItemClick: {
        toggleDataSeries: false,
      },
    },

    grid: {
      borderColor: colorGrey,
      strokeDashArray: 0,
      position: 'back',
      yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
    }
  });
  

  useEffect(() => {
    let lastDate = new Date();
    let data1 = [];
    
      const interval = setInterval(() => {
        
      const newData1 = {
        x: lastDate.getTime(),
        y: y1Data1      
      };

      data1.push(newData1);

      if (data1.length < 0) {
        data1.shift();
      }

      setSeries1([{ name: "value 1", data: data1 }]);
      lastDate = new Date(lastDate.getTime() + 1000);

      ApexCharts.exec("realtime1", "updateSeries", [{ data: data1 }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="chart"  style={{marginLeft:'1rem'}}>
      <ReactApexChart
        options={options1}
        series={series1}
        type="area"
        height={200}
        width='97%'
      />
    </div>
  );
};

export default LineChart;
