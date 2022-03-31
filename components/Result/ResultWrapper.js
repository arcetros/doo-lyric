import PropTypes from 'prop-types';
import ResultItem from './ResultItem';

function ResultWrapper({ musicList }) {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-4 max-h-[20rem] overflow-y-scroll">
      {musicList.map((item, key) => (
        <ResultItem
          key={key}
          id={key}
          data={item}
          title={item.title}
          artist={item.artist.name}
          cover={item.album.cover}
          albumTitle={item.album.title}
        />
      ))}
    </ul>
  );
}

export default ResultWrapper;

ResultWrapper.propTypes = {
  musicList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};
