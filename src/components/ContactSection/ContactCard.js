import { Box, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const ContactCard = ({title,info,icon}) => {
  return (
    <Box className="contact-card">
      {icon}
      <Box className="contact-card-info">
        <Box className="card-info-title">
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box className="card-info-data">
          <Typography variant="body2">{info}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactCard
