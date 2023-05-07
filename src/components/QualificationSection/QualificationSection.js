import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { Box} from '@mui/material';
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Qualification.css";
import QualificationCard from './QualificationCard';
import QualificationSectionTitle from './QualificationSectionTitle';
import { Grid } from "@mui/material";

const QualificationSection = () => {
  return (
    <section className="section qualification">
      <SectionTitle title="Qualification" subtitle="My personal journey" />
      <Box className="qualification-tabs">
        <Grid container rowGap={6}>
          <Grid xs={12} sm={6} item className="education">
              <QualificationSectionTitle
                title="Education"
                icon={<SchoolIcon />}
              />
              <QualificationCard
                title="Computer Engineering"
                subTitle="An-Najah National University"
                year="2011 - 2016"
              />
          </Grid>
          <Grid item xs={12} sm={6} className="work">
              <QualificationSectionTitle
                title="Work"
                icon={<BusinessCenterIcon />}
              />
              <QualificationCard
                title="Software Engineer"
                subTitle="Palestine exchange company"
                year="2019 - 2020"
              />
              <QualificationCard
                title="   Frontend trainee"
                subTitle="Harri"
                year=" 2022 - 2022"
              />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default QualificationSection
