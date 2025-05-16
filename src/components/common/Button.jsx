import ButtonSvg from "../../assets/svg/ButtonSvg";

const VARIANT_STYLES = {
  primary: {
    base: "text-dark-ctaText dark:text-light-ctaText",
    focus: "focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
  },
  secondary: {
    base: "text-primary-700 dark:text-primary-100 ",
    focus: "focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
  },
};

const Button = ({
  variant = "primary",
  className = "",
  href,
  onClick,
  children,
  px = "px-6",
  white = false,
  disable = false,
  download,
  ...rest
}) => {
  const { base, focus } = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  const sharedClasses = `
    relative inline-flex items-center justify-center h-11
    ${px} rounded-lg font-medium transition-colors
    overflow-visible      /* allow svg to overflow */
    ${base} ${focus}
    ${disable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-20">{children}</span>
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-10">
        {ButtonSvg(white)}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={disable ? undefined : href}
        download={download}
        aria-disabled={disable}
        onClick={disable ? (e) => e.preventDefault() : onClick}
        className={sharedClasses}
        {...rest}
      >
        {content}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        disabled={disable}
        onClick={disable ? undefined : onClick}
        className={sharedClasses}
        {...rest}
      >
        {content}
      </button>
    );
  }
};

export default Button;
