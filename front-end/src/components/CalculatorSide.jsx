import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormDisplayContext } from '../context/FormDisplayContext';


export default function TextFieldHiddenLabel() {

  const { roofLength, width, lengthSetter, widthSetter } = useContext(FormDisplayContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(roofLength && width){
      console.log(roofLength, width)
    }

  }



  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >

      <TextField
        onChange={(e) => widthSetter(e.target.value)}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Roof Width (cm)"
        variant="filled"
      />


      <TextField
        onChange={(e) => lengthSetter(e.target.value)}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Roof Length (cm)"
        variant="filled"
      />

      <Button
      variant="contained"
      onClick={handleSubmit}
      >Calculate</Button>

    </Stack>
  );
}
