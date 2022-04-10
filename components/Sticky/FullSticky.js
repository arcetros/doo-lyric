import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import SmallSticky from './SmallSticky';
import LyricSkeleton from './Skeleton/LyricSkeleton';

function FullSticky({ onToggle, context }) {
  let content;

  if (context.loadingLyric) {
    content = <LyricSkeleton />;
  } else if (context.songLyric !== '') {
    content = context.songLyric;
  } else {
    content = context.alert;
  }

  return (
    <Modal>
      <div className="relative flex flex-col h-full m-auto max-w-[40rem]">
        <SmallSticky onToggle={onToggle} context={context} />
        <div className="h-full w-full flex flex-col gap-y-3 overflow-y-scroll border border-gray-100 p-4 z-0">
          <p className="whitespace-pre-line text-[1.35rem] leading-[2.2rem] sm:leading-[2.6rem] font-semibold sm:text-[1.4rem]">
            {content}
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default FullSticky;

FullSticky.propTypes = {
  onToggle: PropTypes.func.isRequired,
  context: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};
