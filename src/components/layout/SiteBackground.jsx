import { memo, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const SIGNAL_NODES = [
  { x: 6, y: 14, size: 10, floatY: -10, floatX: 6, duration: 7.5, delay: 0.1 },
  { x: 16, y: 32, size: 12, floatY: 10, floatX: -5, duration: 8.8, delay: 0.6 },
  { x: 24, y: 18, size: 8, floatY: -8, floatX: 4, duration: 7.2, delay: 0.2 },
  { x: 34, y: 42, size: 14, floatY: 11, floatX: 6, duration: 9.1, delay: 0.9 },
  { x: 46, y: 20, size: 9, floatY: -7, floatX: -4, duration: 7.7, delay: 0.3 },
  { x: 58, y: 48, size: 12, floatY: 9, floatX: 5, duration: 8.5, delay: 1.0 },
  { x: 68, y: 16, size: 10, floatY: -9, floatX: 4, duration: 7.9, delay: 0.4 },
  { x: 78, y: 36, size: 13, floatY: 12, floatX: -6, duration: 9.4, delay: 0.7 },
  { x: 90, y: 18, size: 9, floatY: -6, floatX: 4, duration: 7.1, delay: 0.5 },
  { x: 22, y: 68, size: 11, floatY: 8, floatX: -5, duration: 8.9, delay: 0.8 },
  { x: 44, y: 72, size: 10, floatY: -8, floatX: 4, duration: 7.6, delay: 0.15 },
  { x: 72, y: 70, size: 12, floatY: 10, floatX: -4, duration: 8.6, delay: 0.55 },
  { x: 88, y: 58, size: 10, floatY: -7, floatX: 4, duration: 7.4, delay: 0.25 },
];

const SIGNAL_LINKS = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 7],
  [7, 8],
  [1, 9],
  [3, 10],
  [5, 10],
  [7, 11],
  [11, 12],
  [10, 12],
  [9, 10],
];

const ambientTransition = {
  duration: 24,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const SiteBackground = memo(function SiteBackground() {
  const reduceMotion = useReducedMotion();
  const pointerClientX = useMotionValue(0);
  const pointerClientY = useMotionValue(0);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.28);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const updatePointer = (clientX, clientY) => {
      pointerClientX.set(clientX);
      pointerClientY.set(clientY);
      pointerX.set(clientX / window.innerWidth);
      pointerY.set(clientY / window.innerHeight);
    };

    const handlePointerMove = (event) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event) => {
      const [touch] = event.touches;
      if (!touch) {
        return;
      }

      updatePointer(touch.clientX, touch.clientY);
    };

    const resetPointer = () => {
      updatePointer(window.innerWidth * 0.5, window.innerHeight * 0.28);
    };

    resetPointer();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resetPointer);
    };
  }, [pointerClientX, pointerClientY, pointerX, pointerY, reduceMotion]);

  const springConfig = { stiffness: 54, damping: 24, mass: 0.85 };

  const gridX = useSpring(useTransform(pointerX, [0, 1], [-28, 28]), springConfig);
  const gridY = useSpring(useTransform(pointerY, [0, 1], [-20, 20]), springConfig);
  const networkX = useSpring(useTransform(pointerX, [0, 1], [-38, 38]), springConfig);
  const networkY = useSpring(useTransform(pointerY, [0, 1], [-28, 28]), springConfig);
  const glowPrimaryX = useSpring(useTransform(pointerX, [0, 1], [-220, 220]), springConfig);
  const glowPrimaryY = useSpring(useTransform(pointerY, [0, 1], [-150, 150]), springConfig);
  const glowSecondaryX = useSpring(useTransform(pointerX, [0, 1], [110, -110]), springConfig);
  const glowSecondaryY = useSpring(useTransform(pointerY, [0, 1], [-84, 84]), springConfig);
  const pointerGlowX = useSpring(useTransform(pointerClientX, (value) => value - 240), springConfig);
  const pointerGlowY = useSpring(useTransform(pointerClientY, (value) => value - 240), springConfig);
  const pointerCoreX = useSpring(useTransform(pointerClientX, (value) => value - 88), springConfig);
  const pointerCoreY = useSpring(useTransform(pointerClientY, (value) => value - 88), springConfig);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(99,102,241,0.1),transparent_24%),radial-gradient(circle_at_72%_78%,rgba(14,165,233,0.09),transparent_28%)] dark:bg-[radial-gradient(circle_at_18%_16%,rgba(125,211,252,0.06),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(129,140,248,0.05),transparent_24%),radial-gradient(circle_at_72%_78%,rgba(96,165,250,0.05),transparent_28%)]" />

      <motion.div
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.07] [background-image:linear-gradient(to_right,rgba(15,23,42,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.16)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:48px_48px]"
        style={reduceMotion ? undefined : { x: gridX, y: gridY }}
        animate={reduceMotion ? undefined : { opacity: [0.1, 0.16, 0.12] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(169,121,63,0.16),rgba(56,189,248,0.08),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(208,180,137,0.12),rgba(125,211,252,0.06),transparent_70%)]"
        style={reduceMotion ? undefined : { x: pointerGlowX, y: pointerGlowY }}
        animate={reduceMotion ? undefined : { scale: [0.96, 1.02, 0.98], opacity: [0.5, 0.76, 0.56] }}
        transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute h-44 w-44 rounded-full border border-light-divider/50 bg-white/12 blur-2xl dark:border-dark-divider/50 dark:bg-white/[0.03]"
        style={reduceMotion ? undefined : { x: pointerCoreX, y: pointerCoreY }}
      />

      <motion.div
        className="absolute left-1/2 top-[12%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(125,211,252,0.09),transparent_68%)]"
        style={reduceMotion ? undefined : { x: glowPrimaryX, y: glowPrimaryY }}
        animate={reduceMotion ? undefined : { scale: [0.98, 1.04, 0.99], opacity: [0.72, 0.92, 0.76] }}
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[6%] top-[16%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(129,140,248,0.06),transparent_70%)]"
        style={reduceMotion ? undefined : { x: glowSecondaryX, y: glowSecondaryY }}
        animate={reduceMotion ? undefined : { scale: [1, 1.05, 0.98], opacity: [0.56, 0.78, 0.6] }}
        transition={reduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[4%] bottom-[8%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(56,189,248,0.05),transparent_72%)]"
        style={reduceMotion ? undefined : { x: glowSecondaryX, y: glowPrimaryY }}
        animate={reduceMotion ? undefined : { scale: [0.97, 1.04, 1], opacity: [0.5, 0.7, 0.54] }}
        transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-[20%] top-[-6rem] h-[30rem] w-[30rem]"
        style={reduceMotion ? undefined : { x: networkX, y: networkY }}
      >
        <motion.div
          className="h-full w-full rounded-full border border-light-divider/60 dark:border-dark-divider/60"
          animate={reduceMotion ? undefined : { x: [0, 12, -10, 0], y: [0, -8, 6, 0], rotate: [0, 5, -3, 0] }}
          transition={reduceMotion ? undefined : ambientTransition}
        />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[6%] h-[18rem] w-[18rem]"
        style={reduceMotion ? undefined : { x: gridX, y: gridY }}
      >
        <motion.div
          className="h-full w-full rounded-full border border-light-divider/50 dark:border-dark-divider/50"
          animate={reduceMotion ? undefined : { x: [0, -8, 6, 0], y: [0, 6, -4, 0], rotate: [0, -4, 2, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  ...ambientTransition,
                  duration: 19,
                }
          }
        />
      </motion.div>

      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { x: networkX, y: networkY }}>
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-70"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 10, -8, 0],
                  y: [0, -7, 5, 0],
                  opacity: [0.54, 0.78, 0.62],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  ...ambientTransition,
                  duration: 26,
                }
          }
        >
          {SIGNAL_LINKS.map(([from, to], index) => {
            const start = SIGNAL_NODES[from];
            const end = SIGNAL_NODES[to];
            return (
              <line
                key={`${from}-${to}-${index}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="currentColor"
                strokeWidth="0.16"
                className="text-light-divider/70 dark:text-dark-divider/70"
              />
            );
          })}
        </motion.svg>
      </motion.div>

      {SIGNAL_NODES.map((node, index) => (
        <motion.div
          key={`${node.x}-${node.y}-${index}`}
          className="absolute rounded-full border border-light-divider/70 bg-white/75 shadow-[0_0_0_6px_rgba(255,255,255,0.1)] dark:border-dark-divider/70 dark:bg-white/10 dark:shadow-[0_0_0_6px_rgba(255,255,255,0.03)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, node.floatY, 0],
                  x: [0, node.floatX, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: node.duration,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
});

export default SiteBackground;
