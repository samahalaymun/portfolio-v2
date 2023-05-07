import React from 'react'
import { Box, Grid, Typography } from "@mui/material";


export default function SectionTitle({title,subtitle}) {
  return (
    <Box>
      <Box className="section-title">
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Box className="section-subtitle">
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
    </Box>
  );
}
