import TagLine from "./Tagline";

const Heading = ({
  className = "",
  title,
  text,
  tag,
  centered = true,
  ...props
}) => {
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
    "body mt-5 max-w-[42rem] text-light-muted",
    centered ? "md:mx-auto" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div {...props} className={rootClasses}>
      {tag ? (
        <div>
          <TagLine className={tagClasses}>{tag}</TagLine>
        </div>
      ) : null}
      {title ? (
        <h2 className="h2 text-light-pt">
          {title}
        </h2>
      ) : null}
      {text ? (
        <p className={textClasses}>
          {text}
        </p>
      ) : null}
    </div>
  );
};

export default Heading;
