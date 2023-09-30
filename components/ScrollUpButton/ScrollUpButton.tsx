"use client"

import { useEffect, useState } from "react"
import { RiArrowUpLine } from "react-icons/ri"

export const ScrollUpButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 350) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 350) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <button
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      id="scroll-up"
      onClick={scrollToTop}
    >
        <RiArrowUpLine />
    </button>
  )
}
