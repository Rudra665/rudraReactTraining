import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Divider,
  Typography,
  Select,
} from "@mui/material";
import SampleTable from "./sampleTable.json";
import * as React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import SimpleDialog from "./MyDialog";

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Task4() {
  const [open, setOpen] = React.useState(false);
  const [userAddress, setUserAddress] = React.useState(null);
  const [select, setSelect] = React.useState("");
  const [unselect, setUnselect] = React.useState(true);
  const handleClickOpen = (value) => {
    setOpen(true);
    setUserAddress(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelected = (data) => {
    setSelect(data);
    handleClose();
    setUnselect(false);
  };
  const handleUnSelect = () => {
    setUnselect(true);
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
                <Button onClick={() => handleClickOpen(item.address)}>
                  Address
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <SimpleDialog
        address={userAddress}
        handleSelected={(data) => handleSelected(data)}
        onClose={() => handleClose()}
        open={open}
      />
      <Divider />
      {/* <Typography align="center">Address:{} </Typography> */}
      {console.log("Select", select)}
      {select && (
        <>
          <Typography align="center">Address: {select.city}</Typography>
          <Button onSelect={handleUnSelect}></Button>
        </>
      )}
    </>
  );
}
