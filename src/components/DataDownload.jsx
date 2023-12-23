import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Xlsx from "./DownloadXlsx";
import { Box } from '@mui/material';

export default function DatePickerValue(props) {
  const currentDate = new Date();  
  const [value, setValue] = React.useState(dayjs(currentDate)); 
  const downloaddate = value.format('YYYY-MM-DD');

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} mt={'-0.7rem'}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']} >
          <DatePicker
            label="Download data"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
    </LocalizationProvider>
    <Box ml={'1em'} mr={'1em'}>
      <Xlsx fileName={downloaddate} user={props.user} />
    </Box>
    </Box>
  );
}
