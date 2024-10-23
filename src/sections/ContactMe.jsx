import React, { useState } from "react";
import { Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send email, display success message)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  return (
    <Grid container spacing={2} py={8} px={10}>
      <Grid item xs={12}>
        <Typography
        variant="h2"
        sx={{
          color: "text.light",
          textAlign: "center",
          fontWeight: 500,
          mb: 4,
        }}
      >
        Contact Me
      </Typography>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <IconButton href="mailto:rohitpatelmankari@gmail.com" size="large">
          <EmailIcon fontSize="inherit"/>
        </IconButton>
        <IconButton href="https://github.com/rohitpatel73" target="_blank" size="large">
          <GitHubIcon fontSize="inherit"/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/rohit-patel-1b2192245/" target="_blank" size="large">
          <LinkedInIcon fontSize="inherit"/>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ContactMe;
