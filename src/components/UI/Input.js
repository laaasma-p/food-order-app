import classes from "./Input.module.css";

const Input = ({ id, input, label }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
