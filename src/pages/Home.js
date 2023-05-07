import React from "react";
import Container from "@mui/material/Container";
import InformationSection from "../components/InformationSection/InformationSection";
import AboutSection from "../components/AboutSection/AboutSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import QualificationSection from "../components/QualificationSection/QualificationSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import ProjectInMind from "../components/ProjectInMind/ProjectInMind";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {


  return (
    <main>
      <Container maxWidth="lg">
         <InformationSection></InformationSection>
         <AboutSection />
         <SkillsSection/>
         <QualificationSection/>
         <ServicesSection />
         <PortfolioSection />
         <ProjectInMind/>
          <ContactSection />
      </Container>
    </main>
  );
};

export default Home;
