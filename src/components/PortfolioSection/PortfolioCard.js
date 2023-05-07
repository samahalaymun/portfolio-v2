import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import portfolioImage from "../../assets/img/portfolio1.jpg";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

const PortfolioCard = ({name,description,image,demo,code}) => {
  return (
    <Box className="portfolio-content">
      <Grid container spacing={{ lg: 4, md: 2, sm: 3 }} rowSpacing={{ xs: 3 }}>
        <Grid item lg={6} sm={6} xs={12}>
          <img src={image} className="portfolio-img" />
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Box className="portfolio-data">
            <Box className="title">
              <Typography variant="h3">{name}</Typography>
            </Box>
            <Box className="description">
              <Typography variant="body1">{description}</Typography>
            </Box>
            <Box className="btn-group">
              <ButtonWithIcon
                label={
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                }
              >
                <ArrowOutwardIcon />
              </ButtonWithIcon>
              <ButtonWithIcon
                label={
                  <a href={code} target="_blank">
                    Code
                  </a>
                }
              >
                <GitHubIcon />
              </ButtonWithIcon>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioCard;
