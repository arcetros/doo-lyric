import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ResultItem({ title, artist, cover, albumTitle, id }) {
  return (
    <li className="grid grid-cols-4 rounded shadow p-1" onClick={() => console.log(id)} aria-hidden="true">
      <div className="col-span-1 relative h-16 w-16">
        <Image src={cover} layout="fill" className="object-cover rounded pointer-events-none" />
      </div>
      <div className="col-span-3">
        <div className="flex flex-col justify-evenly h-full">
          <h1 className="text-sm">{title}</h1>
          <div className="text-xs text-gray-700">
            <span className="italic">{albumTitle}</span>
            <span> - </span>
            <span>{artist}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

ResultItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
