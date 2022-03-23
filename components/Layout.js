import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="font-primary relative flex flex-col mx-auto items-start w-full h-screen max-w-full  md:max-w-[100rem] border">
      {children}
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
