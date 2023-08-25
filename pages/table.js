import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">ID Card</TableCell>
            <TableCell align="right">Hospital</TableCell>
            <TableCell align="right">Specialist</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">01</TableCell>
            
            <TableCell align="right">FC76890</TableCell>
            <TableCell align="right">General Hospital, Abj</TableCell>
            <TableCell align="right">Dr. chile Omereji</TableCell>
            <TableCell align="right">Checkup</TableCell>
            <TableCell align="right">22/08/2023</TableCell>
            <TableCell align="right">1:30pm</TableCell>
            <TableCell align="right">
              {" "}
              <button type="button" className="btn text-sm btn-sm ">
                pending
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
