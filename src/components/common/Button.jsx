import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  disable,
  download,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors 
    hover:text-light-pa 
    ${px || "px-7"} 
    ${white ? "text-light-pb" : "text-light-pt"} 
    ${className || ""} 
    ${disable ? "cursor-not-allowed opacity-50" : ""}`; // Added classes for disabled state

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick} disabled={disable}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} download={download} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
