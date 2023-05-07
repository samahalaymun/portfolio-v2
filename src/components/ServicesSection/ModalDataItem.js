import { ListItem, Typography } from '@mui/material';
import React from 'react'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ModalDataItem = ({data}) => {
  return (
    <ListItem className="services-list-item" component="div">
      <CheckCircleOutlineIcon className="modal-icon" fontSize="small" />
      <Typography variant="subtitle1">{data}</Typography>
    </ListItem>
  );
}

export default ModalDataItem
