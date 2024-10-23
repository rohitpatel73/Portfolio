import "./App.css";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box 
} from "@mui/material";
import HeroSection from "./sections/HeroSection";
import EducationTimeline from "./sections/Timeline";
import ProjectList from "./sections/ProjectList";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#23283e",
      dark: "#040c24",
      light: "#474E68",
    },
    buttonCustom: {
      main: "#8dc1ff",
    },
    text: {
      primary: "#9da5bd",
      secondary: "#ffffff",
      dark: "#3a4c7a",
      light: "#8dc1ff",
      disabled: "#040c24",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{width:"100vw"}}>
          <ResponsiveAppBar />
          <HeroSection />
          <EducationTimeline />
          <Skills />
          <ProjectList />
          <ContactMe />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
