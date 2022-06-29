import React, { useState, useEffect } from "react";

import classes from "./style.module.css";
import plate_img from "./plate.jpg";

import { TextField, Select, MenuItem } from "@mui/material";

import alphabets from "utils/alphabets.json";

const LEN_PLATE_1 = 2;
const LEN_PLATE_3 = 3;
const LEN_PLATE_4 = 2;

const Input = ({
  value,
  setValue,
  minLength,
  maxLength,
  options,
  is_select = false,
  name,
}) => {
  if (is_select) {
    return (
      <Select
        size="small"
        options={options}
        name={name}
        value={value}
        onChange={(e) => {
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
      name={name}
      onChange={(e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) setValue(e.target.value);
      }}
    />
  );
};

const Plate = ({ onFinish, value_1, value_2, value_3, value_4 }) => {
  const [plate_4, setPlate_4] = useState(value_1 || "");
  const [plate_3, setPlate_3] = useState(value_2 || "");
  const [plate_2, setPlate_2] = useState(value_3 || "");
  const [plate_1, setPlate_1] = useState(value_4 || "");

  useEffect(() => {
    if (
      plate_1.length === LEN_PLATE_1 &&
      plate_2.length > 0 &&
      plate_3.length === LEN_PLATE_3 &&
      plate_4.length === LEN_PLATE_4
    ) {
      onFinish?.({ plate_1, plate_2, plate_3, plate_4 });
    }
  }, [onFinish, plate_1, plate_2, plate_3, plate_4]);

  return (
    <div className={classes.license_plate_container}>
      <img src={plate_img} alt="پلاک خودرو" />
      <div className={classes.pelak_input}>
        <div className={classes.pelak_box_1}>
          <div className={classes.Fourth_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_4}
                value={plate_4}
                minLength={LEN_PLATE_4}
                maxLength={LEN_PLATE_4}
                name="plate_4"
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
                minLength={LEN_PLATE_3}
                maxLength={LEN_PLATE_3}
                name="plate_3"
              />
            </div>
          </div>
          <div className={classes.Second_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_2}
                value={plate_2}
                is_select
                options={alphabets}
                name="plate_2"
              />
            </div>
          </div>
          <div className={classes.First_part_pelak}>
            <div className={classes.text_input_container}>
              <Input
                setValue={setPlate_1}
                value={plate_1}
                minLength={LEN_PLATE_1}
                maxLength={LEN_PLATE_1}
                name="plate_1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plate;
