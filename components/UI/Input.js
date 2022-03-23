import PropTypes from 'prop-types';

export default function Input({ type, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      className="w-full outline outline-1 rounded p-2 text-xs text-gray-700 placeholder:text-gray-500 placeholder:text-xs"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
