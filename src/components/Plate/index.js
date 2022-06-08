import React, { useState } from "react";

import classes from "./style.module.css";
import plate_img from "./plate.jpg";

import { TextField, Select, MenuItem } from "@mui/material";

import alphabets from "utils/alphabets.json";

const Input = ({
  value,
  setValue,
  minLength,
  maxLength,
  prev_index,
  next_index,
  options,
  is_select = false,
}) => {
  if (is_select) {
    return (
      <Select
        size="small"
        options={options}
        onChange={(e) => {
          console.log(e.target);
          const form = e.target.form;
          form.elements[next_index]?.focus();
          setValue(e.target.value);
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    );
  }

  return (
    <TextField
      size="small"
      inputProps={{ maxLength, minLength }}
      value={value}
      onChange={(e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) setValue(e.target.value);
        const form = e.target.form;

        if (e.target.value.length == maxLength) {
          form.elements[next_index]?.focus();
        }
        if (e.target.value.length == 0) {
          form.elements[prev_index]?.focus();
        }
      }}
    />
  );
};

const Plate = () => {
  const [plate_4, setPlate_4] = useState("");
  const [plate_3, setPlate_3] = useState("");
  const [plate_2, setPlate_2] = useState("");
  const [plate_1, setPlate_1] = useState("");

  console.log(plate_2);

  return (
    <form className={classes.license_plate_container}>
      <img src={plate_img} alt="پلاک خودرو" />
      <div className={classes.pelak_input}>
        <div className={classes.pelak_box_1}>
          <div className={classes.Fourth_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_4}
                value={plate_4}
                minLength={2}
                maxLength={2}
                next_index={2}
              />
            </div>
          </div>
        </div>
        <div className={classes.pelak_box_2}>
          <div className={classes.Third_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_3}
                value={plate_3}
                minLength={3}
                maxLength={3}
                prev_index={0}
                next_index={4}
              />
            </div>
          </div>
          <div className={classes.Second_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_2}
                value={plate_2}
                prev_index={2}
                next_index={6}
                is_select
                options={alphabets}
              />
            </div>
          </div>
          <div className={classes.First_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_1}
                value={plate_1}
                minLength={2}
                maxLength={2}
                prev_index={4}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Plate;
