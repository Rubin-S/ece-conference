const TagLine = ({ className = "", children }) => {
  return <div className={["site-eyebrow", className].filter(Boolean).join(" ")}>{children}</div>;
};

export default TagLine;
