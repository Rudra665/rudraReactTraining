import * as React from 'react';
import SampleTable from "./sampleTable.json"
import { TableContainer, TableHead, TableBody, TableCell,TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true) ;  
  return (
    <div>
    <Button>
      <Modal>
        <Box sx={style}>
          
     <TableContainer align="center">
           <TableHead>
           <TableRow>
             <TableCell>House No.</TableCell>
             <TableCell>State</TableCell>
             <TableCell>City</TableCell>
             <TableCell>Pin code</TableCell>
             <TableCell>Country</TableCell>
           </TableRow>
           </TableHead>
           <TableBody>
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
        </Box>
      </Modal>
    </div>
  );
}

