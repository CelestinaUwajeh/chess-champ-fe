import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const usePageOnScroll = () => {
  const [onScroll, setOnScroll] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (onScroll) {
      if (latest > 0) return;
      return setOnScroll(latest > 0);
    }
    setOnScroll(latest > 0);
  });

  return onScroll;
};
