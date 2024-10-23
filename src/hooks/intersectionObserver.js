import { useState, useEffect } from "react";

function useIntersectionObserver(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [viewedOnce, setViewedOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !viewedOnce) {
        setIsVisible(true);
        setViewedOnce(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, viewedOnce]);

  return { isVisible, viewedOnce };
}

export default useIntersectionObserver;
