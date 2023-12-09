import "./CustomButton.scss";
import PropTypes from "prop-types";

const CustomButton = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={`custom-button ${props?.className}`}
      disabled={disabled || loading}
    >
      {loading ? loadingText : children}
    </button>
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
};

export default CustomButton;
