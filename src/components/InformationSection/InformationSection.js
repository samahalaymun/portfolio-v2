import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import profileImage from "../../assets/img/profile-samah.png";
import { Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./InformationSection.css";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import Typewriter from "typewriter-effect";
import SocialIcons from "../commonComponents/SocialIcons/SocialIcons";
import  Slide  from "react-reveal/Slide";

export default function InformationSection() {
  const navigate = useNavigate();
  return (
    <section id="Home" className="section home">
      <Grid
        spacing={{ lg: 8, md: 8, sm: 2, xs: 2 }}
        container
        className="home-content"
        alignItems="center"
      >
        <Grid item xs={4} sm={1}>
          <SocialIcons className="home-social" />
        </Grid>
        <Grid item xs={8} sm={5} className="Home-image">
            <Box>
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="home-blob"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    href={profileImage}
                    className="home-blob-img"
                    x={12}
                    y={18}
                  />
                </g>
              </svg>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="home-data">
            <Typography variant="h1" className="home-title">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'am Samah").start();
                }}
              />
            </Typography>
            <Typography variant="h3" className="home-subtitle">
              Frontend developer
            </Typography>
            <Typography variant="p" className="home-description">
              High level experience in web design and development knowledge,
              producing quality work.
            </Typography>
            <ButtonWithIcon
              label={<a href="#Contactme">Contact Me</a>}
              className="btn"
            >
              <SendIcon />
            </ButtonWithIcon>
          </Box>
        </Grid>
      </Grid>
      <Box className="home-scroll">
        <ButtonWithIcon label="Scroll down" className=" home-scroll-btn">
          <ArrowDownwardIcon />
        </ButtonWithIcon>
      </Box>
    </section>
  );
}
