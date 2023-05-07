import { Box, Typography } from '@mui/material';
import React from 'react'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const QualificationCard = ({title,subTitle,year}) => {
  return (
    <Box className="qualification-content">
      <Box>
        <Box component="span" className="rounder"></Box>
        <Box component="span" className="line"></Box>
      </Box>
      <Box className="qualification-data">
        <Box>
          <Typography variant="h3" className="title">
            {title}
          </Typography>
          <Box component="span" className="sub-title">
            {subTitle}
          </Box>
          <Box component="span" className="calendar">
            <CalendarMonthIcon /> {year}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QualificationCard
