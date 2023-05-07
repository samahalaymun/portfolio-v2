import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Header.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { ThemeContext } from "../../contexts/ThemeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const pages = [
  {
    page: "Home",
    icon: HomeIcon,
  },
  {
    page: "About",
    icon: PersonIcon,
  },
  {
    page: "Skills",
    icon: TextSnippetIcon,
  },
  {
    page: "Services",
    icon: BusinessCenterIcon,
  },
  {
    page: "Portfolio",
    icon: ImageIcon,
  },
  {
    page: "Contactme",
    icon: SendIcon,
  },
];
function Header() {
  
   const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNavMenu, setShowNavMenu] = React.useState(false);
  const[scroll,setScroll]=useState(false);
  const[isActive,setIsActive]=useState(false);
  const toggleMenu = () => {
    setShowNavMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowNavMenu(false);
  };
  const onSectionActive=()=>{
    const scrollY = window.scrollY;
    const sections=document.querySelectorAll("section");
     sections.forEach((section)=>{
      const sectionHeight=section.offsetHeight;
      const sectionTop=section.offsetTop - 50;
      const sectionId=section.getAttribute('id');
      if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
       document.querySelector(`a[href= '#${sectionId}']`)?.classList.add("active-link");
       
      }else{
         document
           .querySelector(`a[href= '#${sectionId}']`)
           ?.classList.remove("active-link");
      }
     })
  }
 useEffect(() => {
  
   window.onscroll = function () {
     if (window.scrollY > 50) {
       setScroll(true);
     } else {
       setScroll(false);
     }
     onSectionActive();
   };
 }, []);
  return (
    <header className={`navbar ${scroll?'active':''}`}>
      <Container
        maxWidth="lg"
        className="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" className="logo">
          <Box className="logo-wrapper">
            <IntegrationInstructionsIcon className="logo-icon" />
            <span className="logo-name">SAMAH</span>
          </Box>
        </Link>
        <Box className={`nav-menu ${showNavMenu ? "show-menu" : ""}`}>
          <ul className="nav-list grid">
            {pages.map((page) => {
              return (
                <li key={page.page} className="nav-link">
                  <page.icon className="nav-icon" />
                  <a
                    className="nav-link"
                    id={`#${page.page}`}
                    href={`#${page.page}`}
                    onClick={closeMenu}
                  >
                    {page.page}
                  </a>
                </li>
              );
            })}
          </ul>
          <CloseIcon className="nav-close" onClick={closeMenu} />
        </Box>
        <Box className="nav-btns">
          {theme === "dark" ? (
            <WbSunnyOutlinedIcon onClick={toggleTheme} className="dark-mode" />
          ) : (
            <NightlightOutlinedIcon
              onClick={toggleTheme}
              className="dark-mode"
            />
          )}
          <GridViewIcon
            className="nav-toggle"
            onClick={toggleMenu}
          ></GridViewIcon>
        </Box>
      </Container>
    </header>
  );
}
export default Header;
