import { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import AppointmentsDisplay from "./AppointmentsDisplay";
import api from "./api/physicians";
import { Physician } from "./models/Interfaces";

function App() {
  const getPhysicians = async () => {
    const response = await api.get<Physician[]>("/physicians");
    return response.data;
  };

  const [physicians, setPhysicians] = useState<Physician[]>([]);
  const [selectedValue, setSelectedValue] = useState("d1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
    console.log(selectedValue);
  };

  useEffect(() => {
    const getAllPhysicians = async () => {
      const getAllPhysicians = await getPhysicians();

      if (getAllPhysicians) {
        setPhysicians(getAllPhysicians);
      }
    };

    getAllPhysicians();
  }, []);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Doctors</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={selectedValue}
              name="radio-buttons-group"
              onChange={handleChange}
            >
              {physicians.map((physician) => {
                return (
                  <FormControlLabel
                    value={physician.id}
                    control={<Radio />}
                    label={physician.name}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <AppointmentsDisplay physicianId={selectedValue} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
