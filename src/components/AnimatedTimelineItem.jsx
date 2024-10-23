import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/intersectionObserver";

import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export default function AnimatedTimelineItem({ oppText, text, direction, isLast }) {
  const ref = useRef(null);
  const {isVisible} = useIntersectionObserver(ref);
  // console.log(isVisible);
  return (
    <TimelineItem
      ref={ref}
      className={isVisible ? "show" : `hidden move-${direction}`}
    >
      <TimelineOppositeContent>{oppText}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent color="text.light">{text}</TimelineContent>
    </TimelineItem>
  );
}
