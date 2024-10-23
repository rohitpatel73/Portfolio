import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FollowingLogo from "../components/FollowingLogo";
import HeroText from "../components/HeroText";

function HeroSection() {
  const intro =
    "Hello There, I am Rohit Patel, an Aspiring Software Developer";
  const logoSrc = "/images/dev-icon2.png"; 

  return (
    <Container className="hero-section">
      <HeroText intro={intro}/>
      <FollowingLogo  logoSrc={logoSrc} />
    </Container>
  );
}

export default HeroSection;
