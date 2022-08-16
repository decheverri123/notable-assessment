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
import AppointmentsDisplay, { Patient } from "./AppointmentsDisplay";
import api from "./api/physicians";
import { Physician } from "./models/Interfaces";
import axios from "axios";

function App() {
  const getPhysicians = async () => {
    const data = await axios
      .get<Physician[]>("http://localhost:8000/physicians")
      .then((res) => setPhysicians(res.data));
  };

  const [physicians, setPhysicians] = useState<Physician[]>([]);
  const [selectedValue, setSelectedValue] = useState("d1");

  useEffect(() => {
    getPhysicians();
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
              onChange={(e) => setSelectedValue(e.target.value)}
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
