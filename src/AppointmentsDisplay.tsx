import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Physician } from "./models/Interfaces";

export default function AppointmentsDisplay(props: AppointmentsProps) {
  const { physicianId, physicians } = props;

  const specificPhysician = physicians.find(
    (physician) => physician.id == physicianId
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Kind</TableCell>
          </TableRow>
        </TableHead>

        {specificPhysician?.patients.map((patient, index) => (
          <TableRow
            key={patient.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">{patient.name}</TableCell>
            <TableCell align="right">{patient.time}</TableCell>
            <TableCell align="right">{patient.kind}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
}

interface AppointmentsProps {
  physicianId: string;
  physicians: Physician[];
}
