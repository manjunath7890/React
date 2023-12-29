import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const columns = [
  { id: 'name', label: 'Parameter', minWidth: 170 },
  { id: 'code', label: 'Value', minWidth: 100 },
];

function createData(name, code) {
  return { name, code };
}



function ReportTable({data}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = [
    createData('Average gradient',`${data ? data.avgGradient : '---'} °`),
    createData('Ambient temperature', `${data ? data.ambTemperature : '---'} °C`),
    createData('initial Voltage', `${data ? data.initVoltage : '---'} v`),
    createData('final Voltage', `${data ? data.finalVoltage : '---'} v`),
    createData('AH consumed', `${data ? data.initAh : '---'} AH`),
    createData('battery status', `${data ? data.batteryFault : '---'}`),
    createData('max MOS temperature', `${data ? data.maxMosTemperature : '---'} °C`),
    createData('max balance temperature', `${data ? data.maxBalanceTemperature : '---'} °C`),
    createData('High cell voltage', `${data ? data.highCellVoltage : '---'} v`),
    createData('Low cell voltage', `${data ? data.lowCellVoltage : '---'} v`),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: '22.532rem' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize:'1.3rem',  paddingTop:'0.6rem', paddingBottom:'0.6rem', background:colors.palette[300]}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{height:'2rem'}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{fontSize:'0.9rem', paddingTop:'0.3rem', paddingBottom:'0.3rem'}} >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

export default ReportTable;
