import { useMemo } from "react";
import { motion } from "framer-motion";

export default function MotionReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) {
  const Component = useMemo(() => {
    switch (as) {
      case "article":
        return motion.article;
      case "span":
        return motion.span;
      case "section":
        return motion.section;
      case "header":
        return motion.header;
      case "footer":
        return motion.footer;
      case "nav":
        return motion.nav;
      default:
        return motion.div;
    }
  }, [as]);

  return (
    <Component
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
