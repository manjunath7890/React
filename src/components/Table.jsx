import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function MyTable() {
  return (
    <div style={{ width: '21rem', height: '10.2rem', overflow: 'auto' }}>
      <Table sx={{ border: '1px solid #0ff' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '1px solid #0ff' }}>Column 1</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Column 2</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ width: '100px', height: '30px' }}>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 1</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 1</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 1</TableCell>
          </TableRow>
          <TableRow sx={{ width: '100px', height: '30px' }}>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 2</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 2</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 2</TableCell>
          </TableRow>
          <TableRow sx={{ width: '100px', height: '30px' }}>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 3</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 3</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 3</TableCell>
          </TableRow>
          <TableRow sx={{ width: '100px', height: '30px' }}>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 4</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 4</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 4</TableCell>
          </TableRow>
          <TableRow sx={{ width: '100px', height: '30px' }}>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 5</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 5</TableCell>
            <TableCell sx={{ border: '1px solid #0ff' }}>Row 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default MyTable;
