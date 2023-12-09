import PropTypes from "prop-types";
import "./InputText.scss";

const InputText = ({ input, ...inputProps }) => {
  if (input?.textarea) {
    return (
      <textarea
        {...inputProps}
        className={`input-text textarea ${inputProps?.className || ""}`}
      />
    );
  }
  return (
    <input
      {...inputProps}
      className={`input-text ${inputProps?.className || ""}`}
    />
  );
};

InputText.propTypes = {
  input: PropTypes.object.isRequired,
};

export default InputText;
