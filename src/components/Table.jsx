import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { tokens } from "../theme";
import { useTheme} from "@mui/material";

const useStyles = makeStyles({
  tableContainer: {
    height: '100%',
    width: '100%',
    // margin:'-1rem',
    // border: '1px solid #077',
    background: '#000',
    borderRadius:'2.5rem',
    // boxShadow: '0 0  20px 0px #8357fe'
  },
  table: {
    // width: 1000,
  },
  tableRow: {
    '& > *': {
      padding: '6px 20px',
      borderBottom: '1px solid #4117b7',
      
    },
  },
  tableCell: {
    color: 'white',
  
  },
});

function MyTable(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  // Define table data
  const data = [
    { name: 'Gradient', value: props.var5 },
    { name: 'Ambient temperature', value: 32 },
    { name: 'controller health', value: 0 },
    { name: 'Lattitude', value: 13.575468 },
    { name: 'Longitude', value: 77.652434 },
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell className={classes.tableCell}>{row.name}</TableCell>
              <TableCell className={classes.tableCell}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
