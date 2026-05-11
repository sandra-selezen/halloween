import type { Variants } from "framer-motion";

type FadeDirection = "left" | "right" | "up" | "down";
type FadeType = "spring" | "tween" | "keyframes" | "inertia";

export const fadeIn = (
  direction: FadeDirection,
  type: FadeType,
  delay: number,
  duration: number,
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut" as const,
    },
  },
});