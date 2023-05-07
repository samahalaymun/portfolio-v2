import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Box, Grid, Typography } from '@mui/material';
import "./SkillsSection.css";
import SkillBar from './SkillBar';
import Slide from "react-reveal/Slide";

export default function SkillsSection() {
  
  return (
    <section className="skills section" id="Skills">
      <SectionTitle title="Skills" subtitle="My technical level" />
      <Box className="skills-wrapper">
        <Grid container spacing={{ lg: 6, md: 6, sm: 4, xs: 1 }}>
          <Grid item sm={6} xs={12} md={6}>
            <Slide left>
              <SkillBar name="HTML" percentage="90%" />
              <SkillBar name="CSS" percentage="90%" />
              <SkillBar name="Javascript" percentage="90%" />
              <SkillBar name="React" percentage="80%" />
            </Slide>
          </Grid>
          <Grid item sm={6} xs={12} md={6}>
            <Slide left>
              <SkillBar name="Bootstrap" percentage="87%" />
              <SkillBar name="Material ui" percentage="80%" />
              <SkillBar name="Redux" percentage="50%" />
              <SkillBar name="Next js" percentage="40%" />
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
