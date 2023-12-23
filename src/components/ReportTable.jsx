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

const rows = [
  createData('Average gradient', '17'),
  createData('Ambient temperature', '32'),
  createData('initial Voltage', '89.53'),
  createData('final Voltage', '82.5'),
  createData('initial AH', '138'),
  createData('final AH', '47'),
  createData('Watt-Hour consumed', '8453'),
  createData('High cell voltage', '3.24'),
  createData('Low cell voltage', '3.21'),
  createData('High cell difference', '0.08'),
  createData('initial MOS temperature', '32'),
  createData('final MOS temperature', '46'),
//   createData('China', 'CN'),
//   createData('Italy', 'IT'),
];

function ReportTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
