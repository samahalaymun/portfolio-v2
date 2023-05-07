import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ButtonWithIcon from "../../components/commonComponents/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
import projectImage from "../../assets/img/project.png";
import "./ProjectInMind.css";
import Slide from "react-reveal/Slide";

const ProjectInMind = () => {
  return (
    <section className="project section">
      <Box className="project-container">
        <Box className="project-data">
          <Slide left>
            <Box className="project-title">
              <Typography variant="h2">You have a new project</Typography>
            </Box>
          </Slide>
          <Slide left>
            <Box className="project-description">
              <Typography variant="body1">
                Contact me now and get a 30% discount on your new project.
              </Typography>
            </Box>
          </Slide>
          <Slide left>
            <ButtonWithIcon
              label={<a href="#Contactme">Contact me</a>}
              className="white-btn"
            >
              <SendIcon />
            </ButtonWithIcon>
          </Slide>
        </Box>
      </Box>
    </section>
  );
};

export default ProjectInMind;
