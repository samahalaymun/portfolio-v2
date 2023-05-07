import { Box } from '@mui/material';
import React from 'react'

export default function QualificationSectionTitle({title,icon}) {
  return (
    <Box className="qualification-title">
     {icon} {title}
    </Box>
  );
}
