import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Divider,
  Typography,
} from "@mui/material";
import SampleTable from "../sampleTable.json";
import * as React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import SimpleDialog from "../MyDialog/MyDialog";

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Task4() {
  const [open, setOpen] = React.useState(false);
  const [userAddress, setUserAddress] = React.useState(null);
  const [select, setSelect] = React.useState(null);
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
  };
  const handleUnselect = () => {
    setSelect(null);
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
      {select !== null ? (
        <>
          <div align="center">
            <h1>Address</h1>
            <h2>
              {select.house_no} | {select.city} | {select.State} |
              {select.pin_code} | {select.country}
            </h2>
            <Button variant="contained" onClick={handleUnselect}>
              Close
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
}
