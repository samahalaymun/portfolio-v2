import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { Box, List, ListItem, Typography } from '@mui/material';
import ModalDataItem from './ModalDataItem';

const ServiceModal = ({ title, modalData, close }) => {
  return (
    <Box className="services-modal">
      <Box className="services-modal-content">
        <Box className="modal-title">
          <Typography variant="h3">{title}</Typography>
        </Box>
        <CloseIcon
          className="modal-close"
          fontSize="medium"
          onClick={() => close()}
        />
        <List className="services-list">
          {modalData.map((data) => (
            <ModalDataItem data={data} key={data} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ServiceModal
