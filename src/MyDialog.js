import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ShowAddress from "./ShowAddress";
// import PropTypes from "prop-types";
import { Button } from "@mui/material";
const SimpleDialog = (props) => {
  const { onClose, address, open, handleSelected } = props;
  // const { select, setSelect } = React.useState("");

  // const handleClose = () => {
  //   onClose();
  // };
  // const handleSelected = () => {
  //   setSelect(props.address);
  //   handleClose();
  // };

  return (
    <Dialog onClose={onClose} open={open} address={address}>
      <DialogTitle>Address</DialogTitle>
      <ShowAddress data={props.address} />
      {console.log(props.address)}
      <Button onClick={() => handleSelected(props.address)}>Select</Button>
    </Dialog>
  );
};
export default SimpleDialog;
