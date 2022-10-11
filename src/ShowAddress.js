import * as React from "react";
import { TableContainer, TableBody, TableCell, TableRow } from "@mui/material";

export default function ShowAddress(props) {
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

          <TableRow>
            <TableCell>{props.data.house_no}</TableCell>
            <TableCell>{props.data.state}</TableCell>
            <TableCell align="right">{props.data.city}</TableCell>
            <TableCell align="right">{props.data.pin_code}</TableCell>
            <TableCell align="right">{props.data.country}</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
}
