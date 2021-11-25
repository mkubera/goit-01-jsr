import styles from "./Button.module.css";

const Button = ({ type = "button", label, disabled }) => {
  // const btnClasses = `${styles.button} ${disabled ? styles.disabled : ""}`;
  const btnClasses = [styles.button, disabled && styles.disabled].join(" ");

  return (
    <button className={btnClasses} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
