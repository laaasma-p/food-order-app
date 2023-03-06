const Input = ({ id, input, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
