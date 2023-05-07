import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import LinkButton from "../commonComponents/LinkButton";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({ title, icon, modalData }) => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal=()=>{
    setOpenModal(false);
  }
  return (
    <Box className="service-card">
      {icon}
      <Typography variant="h3" className="services-title">
        {title}
      </Typography>
      <LinkButton
        className="view-more-btn"
        label="View More"
        onClick={() => setOpenModal((prev) => !prev)}
      >
        <ArrowForwardIcon />
      </LinkButton>
      {openModal && (
        <ServiceModal
          modalData={modalData}
          title={title}
          close={closeModal}
        />
      )}
    </Box>
  );
};

export default ServiceCard;
