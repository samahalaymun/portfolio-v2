import { Box, Typography } from '@mui/material';
import React from 'react'

const SkillBar = ({name,percentage}) => {
  return (
    <Box className="skill-data">
      <Box className="skill-data-title">
        <Box className="data-title-name" component="span">
          {name}
        </Box>
        <Typography variant="subtitle2" className="data-title-percentage">
          {percentage}
        </Typography>
      </Box>
      <Box className="skill-data-bar">
        <Box
          className="skill-percentage"
          component="span"
          sx={{ width: `${percentage}` }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SkillBar
