import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import SampleTable from "./sampleTable.json";
import * as React from "react";
import Button from "@mui/material/Button";
import ShowAddress from "./ShowAddress";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import { DialogProps } from "@mui/material/Dialog";

function SimpleDialog(props) {
  const { open, onClose } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    // <BlurryDialog fullWidth onClose={() => {}} open={true} maxWidth="xs">
    <>
      <Dialog fullWidth onClose={handleClose} open={open}>
        <DialogTitle>Address</DialogTitle>
        <ShowAddress />
      </Dialog>
    </>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
};

export default function Task4() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer align="center" sx={{ mt: 24 }}>
        <TableHead style={{ backgroundColor: "aliceblue" }}>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>User Email</TableCell>
            <TableCell>User Gender</TableCell>
            <TableCell>User Mobile</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "aliceblue" }}>
          {SampleTable.map((item, id) => (
            <TableRow>
              <TableCell>{item.address.city}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
              <TableCell>
                <Button onClick={handleClickOpen}>Address</Button>
                <SimpleDialog onClose={handleClose} open={open} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </>
  );
}
