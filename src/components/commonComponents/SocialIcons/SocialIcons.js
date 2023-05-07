import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./SocialIcons.css";
import { Box } from '@mui/material';

const SocialIcons = ({className}) => {
  return (
    <Box className={className}>
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/samah-abu-laymun-076414a7/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a className="social-icon">
        <TwitterIcon />
      </a>
      <a
        className="social-icon"
        href="https://github.com/samahalaymun"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    </Box>
  );
}

export default SocialIcons
