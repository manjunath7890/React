import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Xlsx from "./DownloadXlsx";

export default function DatePickerValue() {

  const currentDate = new Date();  
  const [value, setValue] = React.useState(dayjs(currentDate)); 
  const downloaddate = value.format('YYYY-MM-DD');
  console.log(downloaddate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Download data"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Xlsx  fileName={downloaddate} />
      </DemoContainer>
      
    </LocalizationProvider>
  );
}