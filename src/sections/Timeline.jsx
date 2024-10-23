import * as React from "react";
import {
  Timeline
} from "@mui/lab";
import { Typography } from "@mui/material";
import AnimatedTimelineItem from "../components/AnimatedTimelineItem";

export default function EducationTimeline() {
  return (
    <Timeline position="alternate">
      <Typography
        variant="h2"
        sx={{ color: "text.light", my: 3 }}
        id="education"
      >
        Education
      </Typography>
      <AnimatedTimelineItem
        direction={"left"}
        text={"B Tech (Computer Science & Engineering)"}
        oppText={"(2021 - present)"}
        isLast={false}
      />
      <AnimatedTimelineItem
        direction={"right"}
        text={"XII (85.2%)"}
        oppText={"(2019 - 2020)"}
        isLast={false}
      />
      <AnimatedTimelineItem
        direction={"left"}
        text={"X (92%)"}
        oppText={"(2017 - 2018)"}
        isLast={true}
      />
    </Timeline>
  );
}
