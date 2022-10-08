import SampleTable from './sampleTable.json';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Task1() {

    return (
      <><p> This is Task1</p>
        <div><TableContainer>
          <TableHead><TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>User Email</TableCell>
            <TableCell>User Gender</TableCell>
            <TableCell>User Mobile</TableCell>
          </TableRow></TableHead>
          <TableBody>
            {SampleTable.map((item, id) => (
              <TableRow>
                <TableCell >{item.id}</TableCell>
                <TableCell >{item.name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.gender}</TableCell>
                <TableCell align="right">{item.mobile}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </TableContainer></div>
      </>
    )
  }