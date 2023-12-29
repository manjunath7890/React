import React, { useEffect, useState } from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import dayjs from 'dayjs';
import ReactApexChart from 'react-apexcharts';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './bar.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ApexBrushChart(props) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userId, setUserId] = useState();
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

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value); // Set the userId state with the entered value
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${colors.palette[50]}/api/brush?fileName=${downloaddate}&userName=${userId}`);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [downloaddate, userId]);

  const series = selectedVariables.map((variable, index) => ({
    name: `v${index + 1}`,
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
      text: '',
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
      <h3 style={{fontWeight:'bold', display:'flex', justifyContent:'center', marginBottom:'2rem'}}>GRAPH ANALYTICS</h3>
      <div style={{ marginLeft: '15px', display: 'flex' }}>
      <Box
          component="form"
          onSubmit={handleFormSubmit} // Prevent form submission
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Vehicle Id" variant="outlined" onChange={handleUserIdChange} />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>

        {[...Array(5)].map((_, index) => (
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
                <MenuItem value="v39">speed</MenuItem>
                <MenuItem value="v40">RPM</MenuItem>
                <MenuItem value="v38">Wh/km</MenuItem>
                <MenuItem value="v41">distance</MenuItem>
                <MenuItem value="v33">current</MenuItem>
                <MenuItem value="v32">SOC</MenuItem>
                <MenuItem value="v12">balance</MenuItem>
                <MenuItem value="v11">mos-temperature</MenuItem>
                <MenuItem value="v45">c-temperature</MenuItem>
                <MenuItem value="v46">m-temperature</MenuItem>
                <MenuItem value="v40">RPM</MenuItem>
                <MenuItem value="v47">gradient</MenuItem>
                <MenuItem value="v43">motor fan</MenuItem>
                <MenuItem value="v4">a-temperature</MenuItem>
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
