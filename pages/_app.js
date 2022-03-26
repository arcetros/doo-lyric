import PropTypes from 'prop-types';
import MusicProvider from '../store/provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MusicProvider>
      <Component {...pageProps} />
    </MusicProvider>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
