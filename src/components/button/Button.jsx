import styles from "./Button.module.css";

const Button = ({ type = "button", label, disabled, sendEventData }) => {
  // const btnClasses = `${styles.button} ${disabled ? styles.disabled : ""}`;
  const btnClasses = [styles.button, disabled ? styles.disabled : ""].join(" ");

  return (
    <button
      onClick={sendEventData}
      className={btnClasses}
      type={type}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
