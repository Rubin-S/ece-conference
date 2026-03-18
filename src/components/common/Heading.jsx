import TagLine from "./Tagline";
import { motion, useReducedMotion } from "framer-motion";

const Heading = ({
  className = "",
  title,
  text,
  tag,
  centered = true,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const rootClasses = [
    "mx-auto mb-12 max-w-[48rem] md:mb-16",
    centered ? "md:text-center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const tagClasses = ["mb-4", centered ? "md:justify-center" : ""]
    .filter(Boolean)
    .join(" ");

  const textClasses = [
    "body mt-5 max-w-[42rem] text-light-muted dark:text-dark-muted",
    centered ? "md:mx-auto" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      {...props}
      className={rootClasses}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.45 }}
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }
      }
    >
      {tag ? (
        <motion.div
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }
          }
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <TagLine className={tagClasses}>{tag}</TagLine>
        </motion.div>
      ) : null}
      {title ? (
        <motion.h2
          className="h2 text-light-pt dark:text-dark-pt"
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      ) : null}
      {text ? (
        <motion.p
          className={textClasses}
          variants={
            prefersReducedMotion
              ? undefined
              : {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default Heading;
