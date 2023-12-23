// App.js
import React, { useState } from 'react';
import UserForm from './UserForm';
import PDFDocument from './PdfGenerator';
import { Box } from '@mui/material';

function App() {
    const [userData, setUserData] = useState(null);
  
    // Sample chart data (replace with your own data)
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'], 
      datasets: [
        {
          label: 'Sample Line Chart',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
  
    const generatePDF = (data) => {
      setUserData(data);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' , justifyContent:'space-evenly', width: '100%'}}>
        <UserForm generatePDF={generatePDF}/>
        {userData && <PDFDocument userData={userData} chartData={chartData} />}
      </div>
    );
  }
  
  export default App;