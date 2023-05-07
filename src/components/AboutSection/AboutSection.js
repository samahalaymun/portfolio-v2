import React from "react";
import "./AboutSection.css";
import { Box, Grid, Typography } from "@mui/material";
import AboutImage from "../../assets/img/about-2.png";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import DownloadIcon from "@mui/icons-material/Download";
import downloadCv from "../../assets/pdf/Eng_samahCV.pdf";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const AboutSection = () => {
  return (
    <section className="section about" id="About">
      <SectionTitle title="About Me" subtitle="My introduction" />
      <Box className="about-wrapper">
        <Grid
          container
          columnSpacing={{ lg: 8, md: 8, sm: 6 }}
          rowSpacing={{ xs: 3, sm: 3 }}
        >
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="img-wrapper">
              <Slide left>
                <img src={AboutImage} className="about-img" />
              </Slide>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Slide left>
              <Box className="about-data">
                <Box className="about-description">
                  <Typography variant="subtitle1">
                    Frontend developer, responsible for designing and
                    implementing the visual and interactive elements of web
                    application ,I have expertise in HTML, CSS, and JavaScript,
                    React, Material ui, Bootstrap and I use these technologies
                    to create dynamic, responsive, and engaging user interfaces
                  </Typography>
                </Box>
                <Box className="about-info">
                  <Box>
                    <Typography className="about-info-title" variant="h2">
                      +01
                    </Typography>
                    <Typography className="about-info-name" variant="subtitle2">
                      Years experience
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="about-info-title" variant="h2">
                      +10
                    </Typography>
                    <Typography className="about-info-name" variant="subtitle2">
                      Completed project
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="about-info-title" variant="h2">
                      +01
                    </Typography>
                    <Typography className="about-info-name" variant="subtitle2">
                      Companies worked
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="about-btns">
                <ButtonWithIcon
                  label={
                    <a href={downloadCv} className="download-btn" download>
                      DownLoad Cv
                    </a>
                  }
                >
                  <DownloadIcon />
                </ButtonWithIcon>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default AboutSection;
