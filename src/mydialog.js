import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import SampleTable from "sampleTable.json"
import { TableHead, TableBody, TableCell,TableRow } from '@mui/material';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Address dialog</DialogTitle>

      <TableBody>
      <TableHead>
      <TableCell >City</TableCell>
                <TableCell >PinCode</TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
              
      </TableHead>
      <TableRow>
      {SampleTable.map((item.address, id)=>(
                <TableCell >{item.address.pin_code}</TableCell>
                <TableCell >{item.address.city}</TableCell>
                <TableCell align="right">{item.address.country}</TableCell>
                <TableCell align="right">{item.address.house no.}</TableCell>
                <TableCell align="right">{item.mobile}</TableCell>
            ))}
            </TableRow> 
</TableBody>
            
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
