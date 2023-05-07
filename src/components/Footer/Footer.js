import React from "react";
import "./Footer.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import FooterMenu from "./FooterMenu";
import SocialIcons from "../commonComponents/SocialIcons/SocialIcons";

const Footer = () => {
  const menu = ["Services", "Portfolio", "Contact Me"];
  return (
    <footer className="footer">
      <Box className="footer-bg">
        <Container maxWidth="lg">
          <Grid container className="footer-links">
            <Grid item xs={12} sm={4} lg={4} md={4}>            
                <Box className="footer-logo">
                  <Typography variant="h1">Samah</Typography>
                  <Typography variant="subtitle1">
                    Frontend developer
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={4} md={4}>            
                <FooterMenu menu={menu} />
            </Grid>
            <Grid item xs={12} sm={4} lg={4} md={4}>
                <SocialIcons className="footer-social" />
            </Grid>
          </Grid>
            <Box className="copy-right">
              <Typography variant="body1">
                © Samah Abu Laymun. All rights reserved{" "}
                {new Date().getFullYear()}
              </Typography>
            </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
