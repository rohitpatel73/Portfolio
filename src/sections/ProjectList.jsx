// import React from "react";
// import projects from "../assets/projectDetails";
// import ProjectCard from "../components/ProjectCard";
// import { Typography, Grid } from "@mui/material";

// export default function ProjectList() {
//   return (
//     <>
//       <Typography
//         variant="h2"
//         sx={{ color: "text.light", my: 3 }}
//         id="projects"
//       >
//         Projects
//       </Typography>
//       <Grid
//         container
//         spacing={4}
//         justifyContent="space-evenly"
//         alignItems="center"
//       >
//         {projects.map((project, index) => {
//           return (
//             <Grid
//               item
//               xs={12}
//               md={4}
//               key={project.title}
//               style={{ display: "flex", justifyContent: "space-evenly" }}
//             >
//               <ProjectCard project={project} delay={index}/>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </>
//   );
// }




import React from "react";
import projects from "../assets/projectDetails";
import ProjectCard from "../components/ProjectCard";
import { Typography, Grid, Box } from "@mui/material";

export default function ProjectList() {
  return (
    <Box component="section" id="projects" sx={{ py: 5, px: 3 }}>
      <Typography
        variant="h2"
        sx={{
          color: "text.light",
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Projects
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.title}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProjectCard project={project} delay={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
