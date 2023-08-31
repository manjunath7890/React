import React from 'react';
import * as XLSX from 'xlsx';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Xlsx = (props) => {
    const downloadXlsx = async () => {
        try {
          const response = await fetch(`https://telematicsserer.onrender.com/api/data?fileName=${props.fileName}&userName=${props.user}`);
        //   const response = await fetch(`http://localhost:4000/api/data?fileName=${props.fileName}&userName=${props.user}`);
          const data = await response.json();
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
          XLSX.writeFile(workbook, `data${props.fileName}.xlsx`);
        } catch (error) {
          console.error(error);
        }
    };
     console.log(props.user) ;
    return (
        <div>
            <button style={{ background:'none', border: '1px solid #686868', borderRadius:'4px'}} onClick={downloadXlsx}>
                <FileDownloadOutlinedIcon style={{color: '#00c4c9'}}/>
            </button>
        </div>
    );
};

export default Xlsx;
