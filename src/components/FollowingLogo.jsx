import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import useIntersectionObserver from "../hooks/intersectionObserver";
import useViewportWidth from "../hooks/useViewportWidth";

export default function FollowingLogo({ logoSrc }) {
  const ref = useRef(null);
  const {isVisible, viewedOnce} = useIntersectionObserver(ref);
  const viewportWidth = useViewportWidth();
  return (
    <div className={(isVisible || viewedOnce) ? "show" : "hidden move-down"} ref={ref}>
      <img
        width={viewportWidth > 900 ? "450px" : (viewportWidth > 500 ? "300px" : "250px")  }
        
        src={logoSrc}
        alt="Logo"
        className="logo-image"
      />
    </div>
  );
}
