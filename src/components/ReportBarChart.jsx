import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const BarChart = ({ d }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const defaultData = {
    avgCurrentat10SOC: 0,
    avgCurrentat20SOC: 0,
    avgCurrentat30SOC: 0,
    avgCurrentat40SOC: 0,
    avgCurrentat50SOC: 0,
    avgCurrentat60SOC: 0,
    avgCurrentat70SOC: 0,
    avgCurrentat80SOC: 0,
    avgCurrentat90SOC: 0,
    avgCurrentat100SOC: 0,
    avgSpeedAt10SOC: 0,
    avgSpeedat20SOC: 0,
    avgSpeedat30SOC: 0,
    avgSpeedat40SOC: 0,
    avgSpeedat50SOC: 0,
    avgSpeedat60SOC: 0,
    avgSpeedat70SOC: 0,
    avgSpeedat80SOC: 0,
    avgSpeedat90SOC: 0,
    avgSpeedat100SOC: 0,
    tripAt10Soc: 0,
    tripAt20Soc: 0,
    tripAt30Soc: 0,
    tripAt40Soc: 0,
    tripAt50Soc: 0,
    tripAt60Soc: 0,
    tripAt70Soc: 0,
    tripAt80Soc: 0,
    tripAt90Soc: 0,
    tripAt100Soc: 0,
    avgControllerTemperatureat10SOC: 0,
    avgControllerTemperatureat20SOC: 0,
    avgControllerTemperatureat30SOC: 0,
    avgControllerTemperatureat40SOC: 0,
    avgControllerTemperatureat50SOC: 0,
    avgControllerTemperatureat60SOC: 0,
    avgControllerTemperatureat70SOC: 0,
    avgControllerTemperatureat80SOC: 0,
    avgControllerTemperatureat90SOC: 0,
    avgControllerTemperatureat100SOC: 0,
    avgMotorTemperatureAt10SOC: 0,
    avgMotorTemperatureat20SOC: 0,
    avgMotorTemperatureat30SOC: 0,
    avgMotorTemperatureat40SOC: 0,
    avgMotorTemperatureat50SOC: 0,
    avgMotorTemperatureat60SOC: 0,
    avgMotorTemperatureat70SOC: 0,
    avgMotorTemperatureat80SOC: 0,
    avgMotorTemperatureat90SOC: 0,
    avgMotorTemperatureat100SOC: 0,
  };

  const [data, setData] = useState(d || defaultData);

  useEffect(() => {
    if (d) {
      setData(d);
    }
  }, [d]);

  useEffect(() => {
    const options = {
      series: [
        {
          name: 'average current',
          data: [data.avgCurrentat10SOC, data.avgCurrentat20SOC, data.avgCurrentat30SOC, data.avgCurrentat40SOC, data.avgCurrentat50SOC, data.avgCurrentat60SOC, data.avgCurrentat70SOC, data.avgCurrentat80SOC, data.avgCurrentat90SOC, data.avgCurrentat100SOC]
        },
        {
          name: 'average speed',
          data: [data.avgSpeedAt10SOC, data.avgSpeedat20SOC, data.avgSpeedat30SOC, data.avgSpeedat40SOC, data.avgSpeedat50SOC, data.avgSpeedat60SOC, data.avgSpeedat70SOC, data.avgSpeedat80SOC, data.avgSpeedat90SOC, data.avgSpeedat100SOC]
        },
        {
          name: 'distance travelled',
          data: [data.tripAt10Soc, data.tripAt20Soc, data.tripAt30Soc, data.tripAt40Soc, data.tripAt50Soc, data.tripAt60Soc, data.tripAt70Soc, data.tripAt80Soc, data.tripAt90Soc, data.tripAt100Soc]
        },
        {
          name: 'controller temperature',
          data: [data.avgControllerTemperatureat10SOC, data.avgControllerTemperatureat20SOC, data.avgControllerTemperatureat30SOC, data.avgControllerTemperatureat40SOC, data.avgControllerTemperatureat50SOC, data.avgControllerTemperatureat60SOC, data.avgControllerTemperatureat70SOC, data.avgControllerTemperatureat80SOC, data.avgControllerTemperatureat90SOC, data.avgControllerTemperatureat100SOC]
        },
        {
          name: 'motor temperature',
          data: [data.avgMotorTemperatureAt10SOC, data.avgMotorTemperatureat20SOC, data.avgMotorTemperatureat30SOC, data.avgMotorTemperatureat40SOC, data.avgMotorTemperatureat50SOC, data.avgMotorTemperatureat60SOC, data.avgMotorTemperatureat70SOC, data.avgMotorTemperatureat80SOC, data.avgMotorTemperatureat90SOC, data.avgMotorTemperatureat100SOC]
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
        categories: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
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

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div id="chart" />;
};

export default BarChart;
