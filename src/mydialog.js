import * as React from 'react';
import Button from '@mui/material/Button';
import SampleTable from "sampleTable.json"
import { TableHead, TableBody, TableCell,TableRow } from '@mui/material';
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

export default function myDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
     <TableContainer align="center">
           <TableHead>
           <TableRow>
             <TableCell>House No.</TableCell>
             <TableCell>State</TableCell>
             <TableCell>City</TableCell>
             <TableCell>Pincode</TableCell>
             <TableCell>Country</TableCell>
           </TableRow>
           </TableHead>
           <TableBody>
             {SampleTable.map((item, id) => (
            <TableRow>
                 <TableCell >{item.address.house_no.}</TableCell>
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

