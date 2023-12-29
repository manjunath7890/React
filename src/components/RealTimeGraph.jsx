import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const XAXISRANGE = 60000;

const RealTimeGraph = (props) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ydata, setYdata] =useState()

   const y1Data1 = parseInt(props.d);
  //  setYdata(y1Data1);
  const colorGrey = props.color.grey;

  const [series1, setSeries1] = useState([
    {
      name: "value 1",
      data: [],
    },
  ]);

  // Generate a unique chart ID based on a unique identifier (e.g., props.id)
  const chartId = `realtime-${props.id}`;

  const [options1] = useState({
    chart: {
      id: chartId, // Use the generated unique chart ID
      height: 200,
      type: "area",
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
    fill: {
      type: 'solid',
    },
    colors: [colors.palette[500]],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    title: {
      text: `Real-Time Chart`,
      align: "left",
      style: {
        color: colors.palette[500],
        fontSize: "14px",
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
      labels: {
        formatter: (val, timestamp) => {
          return new Date(timestamp).toLocaleTimeString("en-IN");
        },
        style: {
          colors: colors.palette[500],
        },
      },
    },
    yaxis: [
      {
        max: 140,
        title: {
          text: props.id,
          style: {
            color: colors.palette[500],
          },
        },
        labels: {
          style: {
            colors: colors.palette[500],
          },
        },
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
      position: "back",
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
    },
  });


  useEffect(() => {
    let lastDate = new Date();
    let data1 = [];

    const interval = setInterval(() => {
      const newData1 = {
        x: lastDate.getTime(),
        y: y1Data1,
      };

      data1.push(newData1);

      if (data1.length < 0) {
        data1.shift();
      }

      setSeries1([{ name: "value 1", data: data1 }]); // Copy the updated data array
      lastDate = new Date(lastDate.getTime() + 1000);

      ApexCharts.exec(chartId, "updateSeries", [{ data: data1 }]); // Copy the updated data array
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id={`chart`} style={{ marginLeft: "0rem" , marginRight: '-1rem'}}>
      <ReactApexChart
        options={options1}
        series={series1}
        type="area"
        height={200}
        width="99%"
      />
    </div>
  );
};

export default RealTimeGraph;
