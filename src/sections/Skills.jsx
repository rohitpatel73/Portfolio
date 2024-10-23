import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AnimatedSkillCard from "../components/AnimatedSkillCard";

const skills = [
  "C++",
  "HTML/CSS",
  "Javascript",
  "Tailwind CSS",
  "Data Strucures",
  "Algorithms",
  "MERN Stack",
  "React.js",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL"
];

export default function Skills() {
  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3, color: "text.light" }} id="skills">
        Skills
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="space-evenly"
        alignItems="center"
        padding={4}
      >
        {skills.map((skill, index) => {
          return (
            <Grid
              item
              key={skill}
              xs={5}
              md={2}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <AnimatedSkillCard skill={skill} delay={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
