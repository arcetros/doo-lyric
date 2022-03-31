import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 w-full h-screen z-20">
      <div className="fixed top-0 w-full">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
