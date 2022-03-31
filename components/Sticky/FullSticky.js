/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import SmallSticky from './SmallSticky';
import LyricSkeleton from './Skeleton/LyricSkeleton';

function FullSticky({ onToggle, context }) {
  return (
    <Modal>
      <div className="flex flex-col m-auto max-w-[40rem]">
        <SmallSticky onToggle={onToggle} context={context} />
        <div className="flex flex-col gap-y-3 min-h-screen max-h-[100vh] overflow-scroll border border-gray-100 p-4">
          <p className="whitespace-pre-line text-[1.35rem] leading-[2.2rem] sm:leading-[2.6rem] font-semibold sm:text-[1.4rem]">
            {context.loadingLyric ? <LyricSkeleton /> : context.songLyric !== '' ? context.songLyric : context.alert}
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
