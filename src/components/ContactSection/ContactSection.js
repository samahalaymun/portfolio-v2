import React, { useState, useRef } from "react";
import "./ContactSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ContactCard from "./ContactCard";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import Slide from "react-reveal/Slide";
import InputCard from "./InputCard";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import NotificationCard from "../commonComponents/NotificationCard/NotificationCard";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("Send Message");
  const [formMessage, setFormMessage] = useState(null);
  const [formMessageIcon, setFormMessageIcon] = useState(null);
  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setFormStatus("Sending...");
    emailjs
      .sendForm(
        "service_gtu4hjz",
        "template_lazsc6m",
        form.current,
        "tOSg5hdkB_xuQVH4R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormMessage("Message Sent Successfully!");
          setFormMessageIcon(
            <CheckCircleOutlinedIcon className="success" fontSize="small" />
          );
          setTimeout(() => {
            setFormMessage(null);
          }, 3000);
          setFormStatus("Send Message");
          form.current={};
        },
        (error) => {
          setFormMessage("something went wrong , please try again.");
          setFormMessageIcon(
            <CloseOutlinedIcon className="fail" fontSize="small" />
          );
          setTimeout(() => {
            setFormMessage(null);
          }, 3000);
        }
      );
  };

  return (
    <section className="contact section" id="Contactme">
      <SectionTitle title="Contact Me" subtitle="Get in touch" />
      <Box className="contact-content">
        <Grid container rowGap={4}>
          <Grid item xs={12} md={6}>
            <Slide left>
              <ContactCard
                title="Call Me"
                info="0569481919"
                icon={
                  <LocalPhoneOutlinedIcon
                    className="contact-card-icon"
                    fontSize="large"
                  />
                }
              />
            </Slide>
            <Slide left>
              <ContactCard
                title="Email"
                info="samah_abu_laymun@hotmail.com"
                icon={
                  <EmailOutlinedIcon
                    className="contact-card-icon"
                    fontSize="large"
                  />
                }
              />
            </Slide>
            <Slide left>
              <ContactCard
                title="Location"
                info="Palestine - Nablus"
                icon={
                  <LocationOnOutlinedIcon
                    className="contact-card-icon"
                    fontSize="large"
                  />
                }
              />
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <form ref={form} onSubmit={onSubmit}>
              <Slide left>
                <InputCard
                  inputLabel="Name"
                  inputId="name"
                  inputName="name"
                  inputType="text"
                />
              </Slide>
              <Slide left>
                <InputCard
                  inputLabel="Email"
                  inputId="email"
                  inputName="email"
                  inputType="email"
                />
              </Slide>
              <Slide left>
                <InputCard
                  inputLabel="Project"
                  inputId="project"
                  inputName="project"
                  inputType="text"
                />
              </Slide>

              <Slide left>
                <Box className="input-wrapper name">
                  <Typography variant="subtitle1" className="input-label">
                    Message
                  </Typography>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-message"
                  ></textarea>
                </Box>
              </Slide>
              {formMessage && (
                <NotificationCard
                  message={formMessage}
                  icon={formMessageIcon}
                />
              )}
              <ButtonWithIcon label={formStatus} type="submit">
                <SendIcon />
              </ButtonWithIcon>
            </form>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default ContactSection;
