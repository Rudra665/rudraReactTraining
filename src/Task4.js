import { TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material"
import SampleTable from './sampleTable.json';
import './Task4.css';
import * as React from 'react'
import Button from '@mui/material/Button';
import MyModal from "./mydialog";




export default function Task4() {
  
  return (
  
      <>
      <div className="table">
     <TableContainer align="center">
           <TableHead><TableRow>
             <TableCell>User Id</TableCell>
             <TableCell>User Name</TableCell>
             <TableCell>User Email</TableCell>
             <TableCell>User Gender</TableCell>
             <TableCell>User Mobile</TableCell>
             <TableCell>Address</TableCell>
           </TableRow></TableHead>
           <TableBody>
             {SampleTable.map((item, id) => (
            <TableRow>
                 <TableCell >{item.address.city}</TableCell>
                 <TableCell >{item.name}</TableCell>
                 <TableCell align="right">{item.email}</TableCell>
                 <TableCell align="right">{item.gender}</TableCell>
                <TableCell align="right">{item.mobile}</TableCell>
                <Button onclick={handleOpen}><TableCell>{item.address}</TableCell></Button> 
                <MyModal></MyModal>
               </TableRow> 
             ))}        
           </TableBody>
         </TableContainer>
         </div> 
      </>
  
    )}
             