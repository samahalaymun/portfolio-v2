import { Box, Typography } from '@mui/material';
import React from 'react'
import "./NotificationCard.css";
const NotificationCard = ({message,icon}) => {
  return (
    <Box className="notification-msg">
      {icon}
      <Typography variant="subtitle1">{message}</Typography>
    </Box>
  );
}

export default NotificationCard
