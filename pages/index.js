import { useState } from 'react';
import PropTypes from 'prop-types';
import { getMusicInfo } from '../hooks';
import { Layout, ResultWrapper, ItemSkeleton, Input } from '../components';
// import ItemSkeleton from '../components/Result/Skeleton/ItemSkeleton';
import { SearchIcon, LoadingIcon, XIcon } from '../components/icons';

function CancelIcon({ onClick }) {
  return (
    <span onClick={onClick} aria-hidden="true" className="cursor-pointer">
      <XIcon />
    </span>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [musicList, setMusicList] = useState([]);

  getMusicInfo({ inputValue, setIsLoading, setMusicList });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = () => {
    setInputValue('');
    setMusicList([]);
  };

  let icon;

  if (inputValue.trim() !== '') {
    icon = <CancelIcon onClick={handleDelete} />;
    if (isLoading) {
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
                  value={inputValue}
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-2">{icon}</span>
              </div>
            </div>
            <div className="pt-12 w-full">
              {inputValue.trim() !== '' && isLoading ? (
                <ItemSkeleton />
              ) : (
                musicList && <ResultWrapper musicList={musicList} />
              )}
            </div>
            {/* <button type="button" onClick={() => console.log(musicList)}>
          test
        </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

CancelIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
