import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Tables = () => {
  return (
    <div>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell  style={{color:"red",fontFamily:"bold",fontSize:"30px"}}>name</TableCell>
                        <TableCell  style={{color:"skyblue",fontFamily:"bold",fontSize:"30px"}}>age</TableCell>
                        <TableCell  style={{color:"yellow",fontFamily:"bold",fontSize:"30px"}}>address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody></TableBody>
            </Table>
         </TableContainer>
    </div>
  );
}

export default Tables