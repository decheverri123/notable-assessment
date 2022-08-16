import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import api from "./api/physicians";
import physicians from "./api/physicians";

export default function AppointmentsDisplay(props: AppointmentsProps) {
  const { physicianId } = props;

  const getPhysicians = async () => {
    const response = await api.get<Physician[]>("/physicians");
    return response.data;
  };

  const [physicians, setPhysicians] = React.useState<Physician[]>([]);
  React.useEffect(() => {
    const getAllPhysicians = async () => {
      const getAllPhysicians = await getPhysicians();

      if (getAllPhysicians) {
        setPhysicians(getAllPhysicians);
      }
    };

    console.log(physicianId);

    getAllPhysicians();
  }, []);

  const specificPhysician = physicians.find(
    (physician) => physician.id == physicianId
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
export interface Physician {
  id: string;
  name: string;
  patients: Patient[];
}

export interface Patient {
  id: string;
  name: string;
  time: string;
  kind: string;
}

interface AppointmentsProps {
  physicianId: string;
}
