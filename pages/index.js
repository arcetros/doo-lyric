/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MusicContext } from '../store/context';
import { Layout, ResultWrapper, ItemSkeleton, Input, Sticky } from '../components';
import { SearchIcon, LoadingIcon, CancelIcon } from '../components/icons';

export default function Home() {
  const ctx = useContext(MusicContext);

  const handleChange = (e) => {
    ctx.setInputValue(e.target.value);
  };

  const handleDelete = () => {
    ctx.deleteMusicList();
    ctx.setInputValue('');
  };

  let icon;

  if (ctx.inputValue.trim() !== '') {
    icon = <CancelIcon onClick={handleDelete} />;
    if (ctx.isLoading) {
      icon = <LoadingIcon />;
    }
  } else {
    icon = <SearchIcon />;
  }

  return (
    <Layout>
      <div className="w-full mx-auto lg:w-[28%] m-auto">
        <div className="max-w-xs mx-auto">
          <div className="flex flex-col">
            <div className="flex w-full mx-auto flex-col">
              <div className="leading-none mb-4">
                <h1 className="font-bold text-3xl">doo-lyric</h1>
                <span className="text-xs text-gray-500">find your desired song lyric!</span>
              </div>
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Try 'Heavy' by Linkin Park"
                  value={ctx.inputValue}
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-2">{icon}</span>
              </div>
            </div>
            <div className="pt-12 w-full">
              {ctx.inputValue.trim() !== '' && (
                <div>
                  {ctx.isLoading ? (
                    <ItemSkeleton />
                  ) : ctx.musicList.length > 0 ? (
                    <ResultWrapper musicList={ctx.musicList} />
                  ) : (
                    <div className="w-full px-3 min-h-[80px] flex justify-center items-center">
                      <h3 className="text-gray-600 italic text-center">No Results Found</h3>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* <button type="button" onClick={() => console.log(ctx)}>
              test
            </button> */}
          </div>
        </div>
      </div>
      {ctx.selectedMusic != null && <Sticky />}
    </Layout>
  );
}

CancelIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
