import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
export default function Homepage() {
  function createData(name, name_2, Name_3, Name_4, Name_5) {
    return { name, name_2, Name_3, Name_4, Name_5 };
  }
  
  const rows = [
    createData('data 1', 159, 6.0, 24, 4.0),
    createData('data 2', 237, 9.0, 37, 4.3),
    createData('data 3', 262, 16.0, 24, 6.0),
    createData('data 3', 305, 3.7, 67, 4.3),
    createData('data 3', 356, 16.0, 49, 3.9),
  ];
  return (
    

    <>
    <AppBar>
      <Toolbar sx={{backgroundColor:"white"}}>
       <Button variant='outlined' sx={{color:"red"}}>Add Country</Button>
       <Button variant='outlined' sx={{marginLeft:"10px",color:"red"}}>Add City</Button>
      </Toolbar>
    </AppBar>
    <Box sx={{width:"90%" , margin:"auto" , marginTop:"100px"}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Population</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ 'td,tr,th': { border: 2 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name_2}</TableCell>
              <TableCell align="center">{row.Name_3}</TableCell>
              <TableCell align="center">{row.Name_4}</TableCell>
              <TableCell align="center"><Button variant='outlined 2'>Edit</Button></TableCell>
              <TableCell align="center"><Button variant='outlined 2'>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  )
}
