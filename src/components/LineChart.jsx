import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const XAXISRANGE = 60000;

let  y1Data1 = 0;
let  y1Data2 = 0;
let  y2Data1 = 0;
let  y2Data2 = 0;


const LineChart = (props) => {

  y1Data1 = parseInt(props.data.var4);
  y1Data2 = parseInt(props.data.var9);
  y2Data1 = parseInt(props.data.var11);
  y2Data2 = parseInt(props.data.var12);
  const colorGreen = props.color.green;
  const colorBlue = props.color.blue;
  const colorGrey = props.color.grey;

  const [series1, setSeries1] = useState([
    {
      name: "value 1",
      data: [],
    },
    {
      name: "value 2",
      data: []
    }
  ]);
  const [series2, setSeries2] = useState([
    {
      name: "value 1",
      data: [],
    },
    {
      name: "value 2",
      data: []
    }
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
    colors: [colorGreen, colorBlue],
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
        color: colorBlue, // set the color to red
        fontSize: '15px' // set the font size
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
            color: colorBlue,
          }
        },
        labels: {
          style: {
            colors: colorBlue
          }
        }
      },
      {
        max: 5000,
        title: {
          text: "value 2",
          style: {
            color: colorBlue,
          }
        },
        opposite: true,
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
  

  const [options2] = useState({
    chart: {
      id: "realtime2",
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
    colors: [colorGreen, colorBlue],
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
        color: colorBlue, // set the color to red
        fontSize: '15px' // set the font size
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
        max: 100,
        title: {
          text: "value 3",
          style: {
            color: colorBlue,
          }
        },
        labels: {
          style: {
            colors: colorBlue
          }
        }
      },
      {
        max: 180,
        title: {
          text: "value 4",
          style: {
            color: colorBlue,
          }
        },
        opposite: true,
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
    let data2 = [];
    let data3 = [];
    let data4 = [];
    
      const interval = setInterval(() => {
        
      const newData1 = {
        x: lastDate.getTime(),
        y: y1Data1
      
      };
      
      // console.log(y1Data1);
      const newData2 = {
        x: lastDate.getTime(),
        y: y1Data2
      };

      const newData3 = {
        x: lastDate.getTime(),
        y: y2Data1
      };

      const newData4 = {
        x: lastDate.getTime(),
        y: y2Data2
      };

      data1.push(newData1);
      data2.push(newData2);
      data3.push(newData3);
      data4.push(newData4);

      if (data1.length < 0) {
        data1.shift();
      }
      if (data2.length < 0) {
        data2.shift();
      }
      if (data3.length < 0) {
        data3.shift();
      }
      if (data4.length < 0) {
        data4.shift();
      }

      setSeries1([{ name: "value 1", data: data1 }, { name: "value 2", data: data2 }]);
      setSeries2([{ name: "value 3", data: data3 }, { name: "value 4", data: data4 }]);
      lastDate = new Date(lastDate.getTime() + 1000);

      ApexCharts.exec("realtime1", "updateSeries", [{ data: data1 }, { data: data2 }]);
      ApexCharts.exec("realtime2", "updateSeries", [{ data: data3 }, { data: data4 }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id="chart" >
      <ReactApexChart
        options={options1}
        series={series1}
        type="line"
        height={200}
        width='100%'
      />
      <ReactApexChart
        options={options2}
        series={series2}
        type="line"
        height={200}
        width='100%'
      />
    </div>
  );
};

export default LineChart;
