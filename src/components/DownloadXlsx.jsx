import React from 'react';
import * as XLSX from 'xlsx';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Xlsx = (props) => {
    const downloadXlsx = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/data?fileName=${props.fileName}`);
          const data = await response.json();
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
          XLSX.writeFile(workbook, `data${props.fileName}.xlsx`);
        } catch (error) {
          console.error(error);
        }
    };
      
    return (
        <div>
            <button style={{ background:'none', border: '1px solid #686868', borderRadius:'4px'}} onClick={downloadXlsx}>
                <FileDownloadOutlinedIcon style={{color: '#4cceac'}}/>
            </button>
        </div>
    );
};

export default Xlsx;