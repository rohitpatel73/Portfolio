import React from "react";
import { Box, Button } from "@mui/material";
import IntroText from "./IntroText";
import useViewportWidth from "../hooks/useViewportWidth";

export default function HeroText({ intro }) {
  let viewportWidth = useViewportWidth();
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{color : "text.light"}}>
        {viewportWidth > 900 ? (
          <h1 style={{ textAlign: "center" }}>
            <IntroText text={intro} delay={50} />
          </h1>
        ) : (
          <h2 style={{ textAlign: "center" }}>
            <IntroText text={intro} delay={50} />
          </h2>
        )}

        <div style={{ textAlign: "center" }}>
          <Button
            sx={{ my: "2rem", borderWidth: "2px", marginBottom: 0 }}
            variant="outlined"
            href="/resume/Rohit_Resume.pdf"
            download
            color="buttonCustom"
          >
            Resume
          </Button>
        </div>
      </div>
    </Box>
  );
}
