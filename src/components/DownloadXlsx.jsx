import React from 'react';
import {useTheme } from "@mui/material";
import * as XLSX from 'xlsx';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { tokens } from "../theme";

const Xlsx = (props) => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode); 
    const downloadXlsx = async () => {
        try {
          const response = await fetch(`${colors.palette[50]}/api/data?fileName=${props.fileName}&userName=${props.user}`);
          const data = await response.json();
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
          XLSX.writeFile(workbook, `data${props.fileName}.xlsx`);
        } catch (error) {
          console.error(error);
        }
    };
    //  console.log(props.fileName) ;
    return (
            <button style={{backgroundColor: colors.palette[510], color:colors.palette[800] , border: '0px solid #686868', borderRadius:'0.6rem', paddingTop:'0.2rem', paddingBottom:'0.3rem'}} onClick={downloadXlsx}>
                <FileDownloadOutlinedIcon style={{}}/>
            </button>
    );
};

export default Xlsx;
