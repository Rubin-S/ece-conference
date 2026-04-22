import { createElement } from "react";

export default function MotionReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) {
  void delay;

  return createElement(as, { className, ...props }, children);
}
