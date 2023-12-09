import PropTypes from "prop-types";
import "./InputText.scss";

const InputText = ({ textarea = false, ...inputProps }) => {
  if (textarea) {
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
  textarea: PropTypes.bool,
};

export default InputText;
