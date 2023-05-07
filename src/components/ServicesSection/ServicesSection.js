import React from 'react'
import "./ServicesSection.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import { Box,Grid} from '@mui/material';
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import ServiceCard from './ServiceCard';
import { Web } from '@mui/icons-material';
import EditIcon from "@mui/icons-material/Edit";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import  Slide  from 'react-reveal/Slide';

const ServicesSection = () => {
  let serviceData = {
    frontend: [
      "I Translate Designs into Code.",
      "I Develop Responsive Webpages.",
      "I Create User-Friendly Interfaces.",
      "I Integrate Frontend with Backend Systems.",
    ],
    web: [
      "I Create Visual Design Concepts.",
      "I Select Fonts, Colors, and Images.",
      "I Create Responsive Designs.",
      "I Update and Maintain Website Designs.",
    ],
    mobile: [
      "Designing Mobile-First.",
      "I create Responsive Designs.",
      "I create Flexible Layouts.",
      "I optimize Images and Graphics.",
    ],
  };
  return (
    <section className="section services" id="Services">
      <SectionTitle title="Services" subtitle="What I offer" />
      <Box className="services-cards">
        <Grid container spacing={4}>
          <Grid item lg={4} sm={6} xs={12}>
              <ServiceCard
                title={
                  <>
                    {"Fronted"}
                    <br />
                    {"Developer"}
                  </>
                }
                icon={<CodeIcon className="service-icon" fontSize="large" />}
                modalData={serviceData.frontend}
              />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
              <ServiceCard
                title={
                  <>
                    {"Web"}
                    <br />
                    {"Designer"}
                  </>
                }
                icon={<EditIcon className="service-icon" fontSize="large" />}
                modalData={serviceData.web}
              />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
              <ServiceCard
                title={
                  <>
                    {"Mobile Responsive "}
                    <br />
                    {"Designer"}
                  </>
                }
                icon={
                  <PhoneIphoneOutlinedIcon
                    className="service-icon"
                    fontSize="large"
                  />
                }
                modalData={serviceData.mobile}
              />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default ServicesSection
