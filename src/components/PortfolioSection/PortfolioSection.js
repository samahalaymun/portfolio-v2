import React from "react";
import "./PortfolioSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Box } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import app1 from "../../assets/img/tv-and-series.jpg";
import app2 from "../../assets/img/app2.jpg";
import app3 from "../../assets/img/app3.jpg";
import app4 from "../../assets/img/app4.png";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const PortfolioSection = () => {
  const portfolios = [
    {
      name: "Movies App",
      description:
        "This website allow you to navigate between Home, Movies,TV Series, and Bookmarked Shows pages you can see demo to get more details.",
      demo: "https://samahalaymun.github.io/Entertainment-web-app/",
      code: "https://github.com/samahalaymun/Entertainment-web-app",
      image: app1,
    },
    {
      name: "E-commerce product page",
      description:
        "This page show product details , images and prices , allow you to choose quantity , add product to shopping cart.",
      demo: "https://samahalaymun.github.io/ecommerce-product-page-main/",
      code: "https://github.com/samahalaymun/ecommerce-product-page-main",
      image: app2,
    },
    {
      name: "Multi step form",
      description:
        "a multi step form is a from that is broken down into multiple sections or steps, each containing a subset of the overall fields. ",
      demo: "https://samahalaymun.github.io/multi-step-form/",
      code: "https://github.com/samahalaymun/multi-step-form",
      image: app3,
    },
    {
      name: "Url shortener landing page",
      description:
        "a multi step form is a from that is broken down into multiple sections or steps, each containing a subset of the overall fields. ",
      demo: "https://samahalaymun.github.io/url-shortener-landing-page/",
      code: "https://github.com/samahalaymun/url-shortener-landing-page",
      image: app4,
    },
  ];

  return (
    <section id="Portfolio" className="portfolio section">
      <SectionTitle title="Portfolio" subtitle="Most recent work" />
      <Box className="swiper-container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="portfolio-swiper"
          style={{ paddingBottom: " 3.5rem" }}
        >
          {portfolios.map((portfolio,index)=>{
            return ( <SwiperSlide className="swiper-slide">
               <PortfolioCard
                //  name={portfolio.name}
                //  description={portfolio.description}
                //  demo={portfolio.demo}
                //  code={portfolio.code}
                //  image={portfolio.image}
               {...portfolio}
               />
             </SwiperSlide>);
          })}
        </Swiper>
      </Box>
    </section>
  );
};

export default PortfolioSection;
