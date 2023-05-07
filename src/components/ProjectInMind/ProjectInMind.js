import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ButtonWithIcon from "../../components/commonComponents/ButtonWithIcon";

import "./ProjectInMind.css";

const ProjectInMind = () => {
  return (
    <section className="project section">
      <Box className="project-container">
        <Box className="project-data">
          
            <Box className="project-title">
              <Typography variant="h2">You have a new project</Typography>
            </Box>
         
         
            <Box className="project-description">
              <Typography variant="body1">
                Contact me now and get a 30% discount on your new project.
              </Typography>
            </Box>
         
       
            <ButtonWithIcon
              label={<a href="#Contactme">Contact me</a>}
              className="white-btn"
            >
              <SendIcon />
            </ButtonWithIcon>
        </Box>
      </Box>
    </section>
  );
};

export default ProjectInMind;
