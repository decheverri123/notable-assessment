import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "./api/physicians";

export default function CustomFormControl(props: any) {
  const getPhysicians = async () => {
    const response = await api.get<Physician[]>("/physicians");
    return response.data;
  };

  const [physicians, setPhysicians] = useState<Physician[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
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
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Doctors</FormLabel>
        <div>
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
        </div>
      </FormControl>
    </div>
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
