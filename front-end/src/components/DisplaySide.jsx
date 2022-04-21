import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import { FormDisplayContext } from '../context/FormDisplayContext';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 10,
  width: 10,
  margin: 2,
}));

export default function ResponsiveStack() {

  const { roofLength, width } = useContext(FormDisplayContext);

  let alphaRows = Math.floor(width / 31.5) 
  let alphaRow = [];
  let alphaColumns = Math.floor(roofLength / 31.5) - 1
  let alphaColumn = [];


  for (let i = 0; i < alphaColumns; i++) {

  // IF i % NUMBER = 0 { put a, b or c}

  if(i % 7 === 0){
    alphaColumn.push(<div><Item> c </Item></div>)
  } else {
    alphaColumn.push(<div><Item> a </Item></div>)
  }
  }

  for (let i = 0; i < alphaRows; i++) {
    alphaRow.push(<div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        {alphaColumn}
      </Stack>
    </div>)
  }

///////
let betaWidth = width
if (Math.floor(betaWidth / 31.5) % 2 !== 0) {
  betaWidth = betaWidth - 31.5
}

let betaRows = Math.floor(betaWidth / 31.5) 
let betaRow = [];
let betaColumns = Math.floor(roofLength / 31.5)
let betaColumn = [];

for (let i = 0; i < betaColumns; i++) {

// IF i % NUMBER = 0 { put a, b or c}

if(i % 7 === 0){
  betaColumn.push(<div><Item> + </Item></div>)
} else {
  betaColumn.push(<div><Item> + </Item></div>)
}
}

for (let i = 0; i < betaRows; i++) {
  betaRow.push(<div>
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 1, md: 1 }}
    >
      {betaColumn}
    </Stack>
  </div>)
}


///////

let gammaWidth = width
  if (Math.floor(gammaWidth / 31.5) % 2 !== 0) {
    gammaWidth = gammaWidth - 31.5
  }

let gammaRows = Math.floor(gammaWidth / 31.5) 
let gammaRow = [];
let gammaColumns = Math.floor(roofLength / 31.5)
let gammaColumn = [];

for (let i = 0; i < gammaColumns; i++) {

// IF i % NUMBER = 0 { put a, b or c}

if(i % 7 === 0){
  gammaColumn.push(<div><Item> + </Item></div>)
} else {
  gammaColumn.push(<div><Item> + </Item></div>)
}
}

for (let i = 0; i < gammaRows; i++) {
  gammaRow.push(<div>
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 1, md: 1 }}
    >
      {gammaColumn}
    </Stack>
  </div>)
}


  return (<div>
    <h2>Alpha Chart</h2>
    <div>{alphaRow}</div>
    <h2>Beta Chart</h2>
    <div>{betaRow}</div>
    <h2>Gamma Chart</h2>
    <div>{gammaRow}</div>
  </div>);
}
