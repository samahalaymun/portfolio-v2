import { Box, Typography } from '@mui/material';
import React from 'react'

const InputCard = ({inputLabel,inputType ,inputId,inputName}) => {
  return (
    <Box className="input-wrapper">
      <Typography variant="subtitle1" className="input-label">
        {inputLabel}
      </Typography>
      <input type={inputType} id={inputId} name={inputName} required></input>
    </Box>
  );
}

export default InputCard
