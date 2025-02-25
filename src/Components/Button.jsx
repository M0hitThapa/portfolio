import PropTypes from "prop-types";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

// PropTypes Validation
Button.propTypes = {
  name: PropTypes.string.isRequired, // Must be a string and required
  isBeam: PropTypes.bool, // Must be a boolean (default is false)
  containerClass: PropTypes.string, // Must be a string
};

export default Button;
