import React, { useEffect, useState } from 'react';
import { LineChart, Brush, XAxis, YAxis, Line } from 'recharts';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const App = (props) => {
  const [variables, setVariables] = useState(['', '', '', '', '', '']);
  const lineColors = [
    '#008ffb', 
    '#00e396', 
    '#ffa800', 
    '#ff2c4a',
    '#775dd0',
    '#775dd0', 
  ];
  

  const handleVariableChange = (event, index) => {
    const newVariables = [...variables];
    newVariables[index] = event.target.value;
    setVariables(newVariables);
  };

  const [data, setData] = useState([]);
  const currentDate = new Date();
  const [value, setValue] = useState(dayjs(currentDate));
  const downloaddate = value.format('YYYY-MM-DD');
  console.log(downloaddate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://telematicsserer.onrender.com/api/brush?fileName=${downloaddate}&userName=${props.user}`
        );

        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [downloaddate, props.user]);

  return (
    <>
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
        {variables.map((variable, index) => (
          <Box sx={{ minWidth: 120, margin: '8px 5px' }} key={index}>
            <FormControl fullWidth sx={{ borderColor: 'green' }}>
              <InputLabel id={`variable-label-${index}`} sx={{ color: '#4ad3af' }}>
                Variable {index + 1}
              </InputLabel>
              <Select
                labelId={`variable-label-${index}`}
                id={`variable-select-${index}`}
                value={variable}
                label={`Variable ${index + 1}`}
                onChange={(event) => handleVariableChange(event, index)}
                sx={{ color: 'white' }}
              >
                <MenuItem value={'var1'}>var1</MenuItem>
                <MenuItem value={'var2'}>var2</MenuItem>
                <MenuItem value={'var3'}>var3</MenuItem>
                <MenuItem value={'var4'}>var4</MenuItem>
                <MenuItem value={'var5'}>var5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ))}
      </div>

      <LineChart width={1300} height={500} data={data}>
  <XAxis dataKey="timestamp" tickFormatter={(time) => dayjs(time).format('HH:mm:ss')} />
  <YAxis tick={{ fillOpacity: 0.5 }} />
  <Brush dataKey="timestamp" height={30} stroke="#274dfd" tickFormatter={(time) => dayjs(time).format('HH:mm:ss')} />
  {variables.map((variable, index) => (
    <Line
      key={index}
      dataKey={variable}
      stroke={lineColors[index % lineColors.length]}
      type="monotone"
      strokeWidth={3}
      dot={null}
    />
  ))}
</LineChart>
    </>
  );
};

export default App;
