import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/intersectionObserver";
import { Paper } from "@mui/material";
import useViewportWidth from "../hooks/useViewportWidth";

export default function AnimatedSkillCard({ skill, delay }) {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);
  const viewportWidth = useViewportWidth();

  return (
    <div
      ref={ref}
      className={
        isVisible ? "show" : `hide move-${delay % 2 ? "left" : "right"}`
      }
      style={{ 
        "--animation-delay": `${1500 + delay * 120}ms`,
     }}
    >
      <Paper
        elevation={3}
        sx={{
          minHeight: 30,
          minWidth:
            viewportWidth > 1024
              ? "203.5px"
              : viewportWidth > 780
              ? "150px"
              : viewportWidth > 500
              ? "203.5px"
              : "150px",
              
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <div>{skill}</div>
      </Paper>
    </div>
  );
}
