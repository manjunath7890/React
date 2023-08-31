import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ReactApexChart from 'react-apexcharts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './bar.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ApexBrushChart(props) {
  const currentDate = new Date();
  const [value, setValue] = useState(dayjs(currentDate));
  const downloaddate = dayjs(value).format('YYYY-MM-DD');
  const [data, setData] = useState([]);

  const [selectedVariables, setSelectedVariables] = useState([]);

  const handleVariableChange = (event, index) => {
    const newSelectedVariables = [...selectedVariables];
    newSelectedVariables[index] = event.target.value;
    setSelectedVariables(newSelectedVariables);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://telematicsserer.onrender.com/api/brush?fileName=${downloaddate}userName=${props.user}`);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [downloaddate]);

  const series = selectedVariables.map((variable, index) => ({
    name: `Variable ${index + 1}`,
    data: data.map((item) => ({
      x: item.timestamp,
      y: item[variable]
    }))
  }));

  const chartOptions = {
    chart: {
      height: 550,
      type: 'area',
      stacked: false,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom',
        tools: {
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Values'
      }
    },
    title: {
      text: 'Variable Graphs',
      align: 'center'
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val;
        }
      }
    },
    theme: {
      background: '#333',
      color: '#f0f000'
    },
    legend: {
      position: 'top'
    },
    grid: {
      opacity: 0.4
    }
  };

  return (
    <div>
      <div style={{ marginLeft: '15px', display: 'flex' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>

        {[...Array(10)].map((_, index) => (
          <Box sx={{ minWidth: 100, margin: '8px 2px' }} key={index}>
            <FormControl fullWidth>
              <InputLabel id={`variable-label-${index}`}>Variable {index + 1}</InputLabel>
              <Select
                labelId={`variable-label-${index}`}
                id={`variable-select-${index}`}
                value={selectedVariables[index] || ''}
                label={`Variable ${index + 1}`}
                onChange={(event) => handleVariableChange(event, index)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="var1">speed</MenuItem>
                <MenuItem value="var2">RPM</MenuItem>
                <MenuItem value="var3">Gradient</MenuItem>
                <MenuItem value="var4">distance</MenuItem>
                <MenuItem value="var5">current1</MenuItem>
                <MenuItem value="var6">current2</MenuItem>
                <MenuItem value="var7">current3</MenuItem>
                <MenuItem value="var8">current4</MenuItem>
                <MenuItem value="var9">c-temperature</MenuItem>
                <MenuItem value="var10">m-temperature</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ))}
      </div>

      <ReactApexChart options={chartOptions} series={series} type="area" height={550} />
    </div>
  );
}

export default ApexBrushChart;
