import * as React from 'react';
import SampleTable from "./sampleTable.json"
import { TableContainer, TableHead, TableBody, TableCell,TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function ShowAddress() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true) ;  
  return (      
     
           <>
     <TableContainer align="center">
           <TableBody>
           <TableRow>
             <TableCell>House No.</TableCell>
             <TableCell>State</TableCell>
             <TableCell>City</TableCell>
             <TableCell>Pin code</TableCell>
             <TableCell>Country</TableCell>
           </TableRow>
             {SampleTable.map((item, id) => (
            <TableRow>
                 <TableCell >{item.address.house_no}</TableCell>
                 <TableCell >{item.address.state}</TableCell>
                 <TableCell align="right">{item.address.city}</TableCell>
                 <TableCell align="right">{item.address.pin_code}</TableCell>
                <TableCell align="right">{item.address.country}</TableCell>
               </TableRow> 
             ))}        
           </TableBody>
         </TableContainer> 
    </>
  );
}

