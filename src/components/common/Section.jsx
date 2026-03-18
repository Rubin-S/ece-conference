import { motion, useReducedMotion } from "framer-motion";

const Section = ({
  className = "",
  id,
  customPaddings,
  children,
  reveal = true,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      {...props}
      className={["relative", customPaddings || "py-18 md:py-22 lg:py-26", className]
        .filter(Boolean)
        .join(" ")}
      initial={prefersReducedMotion || !reveal ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion || !reveal ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion || !reveal ? undefined : { once: true, amount: 0.14 }}
      transition={
        prefersReducedMotion || !reveal
          ? undefined
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.section>
  );
};

export default Section;
