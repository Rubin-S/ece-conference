const Section = ({
  className = "",
  id,
  customPaddings,
  children,
  reveal = true,
  ...props
}) => {
  void reveal;

  return (
    <section
      id={id}
      {...props}
      className={["relative", customPaddings || "py-18 md:py-22 lg:py-26", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
};

export default Section;
