import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 w-full min-h-screen z-20">
      <div className="fixed w-full h-full">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
