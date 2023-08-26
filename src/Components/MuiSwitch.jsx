import React from 'react';
import {Box, FormControlLabel, Switch} from "@mui/material"
import { useState } from 'react';

function MuiSwitch() {

    const [checked,setChecked] = useState(false);
    console.log(checked)

  const handleChange=(e)=>{
    setChecked(e.target.checked)

  }
  return (
    <Box>
    <FormControlLabel 
    label="Dark mode" 
    control={<Switch checked={checked}
    onChange={handleChange} size='small' 
    color='success'
    />} 
    />
      
    </Box>
  )
}

export default MuiSwitch
