import Image from 'next/image';
import PropTypes from 'prop-types';
import { ChevronUp } from '../icons';

function SmallSticky({ onToggle, context }) {
  return (
    <div className="flex mx-auto w-full shadow-md">
      <div className="w-full flex items-center justify-between my-2 mx-4 md:mx-10">
        <div className="flex items-center gap-x-4">
          <div className="col-span-1 relative h-16 w-16">
            <Image
              src={context.selectedMusic.artistData.album.cover}
              layout="fill"
              className="object-cover rounded pointer-events-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">{context.selectedMusic.songTitle}</span>
            <span className="text-gray-800 text-xs">{context.selectedMusic.author}</span>
          </div>
        </div>
        <div
          className={`flex transform items-center ${context.showModal ? 'rotate-180' : null}`}
          onClick={onToggle}
          aria-hidden="true"
        >
          <ChevronUp />
        </div>
      </div>
    </div>
  );
}

export default SmallSticky;

SmallSticky.propTypes = {
  onToggle: PropTypes.func.isRequired,
  context: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};
