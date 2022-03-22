import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { getMusicInfo } from '../hooks';
import { Layout } from '../components';
import { SearchIcon, LoadingIcon, XIcon } from '../components/icons';

function Item({ title, artist, cover, albumTitle }) {
  return (
    <li className="grid grid-cols-4 rounded shadow p-1">
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

  let icon;
  const handleDelete = () => {
    setInputValue('');
    setMusicList([]);
  };

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
      <div className="flex flex-col m-auto w-[28%]">
        <div className="flex w-full mx-auto flex-col max-w-xs">
          <div className="leading-none mb-4">
            <h1 className="font-bold text-3xl">doo-lyric</h1>
            <span className="text-xs text-gray-500">find your desired song lyric!</span>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full outline outline-1 rounded p-2 text-xs text-gray-700 placeholder:text-gray-500 placeholder:text-xs"
              placeholder="Try 'Heavy' by Linkin Park"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span className="absolute right-3 top-2">{icon}</span>
          </div>
        </div>
        <div className="pt-12 w-full">
          {inputValue.trim() !== '' && isLoading ? (
            'Loading...'
          ) : (
            <div>
              {musicList && (
                <ul className="grid grid-cols-1 gap-x-4 gap-y-4">
                  {musicList.map((item) => (
                    <Item
                      title={item.title}
                      artist={item.artist.name}
                      cover={item.album.cover}
                      albumTitle={item.album.title}
                    />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        {/* <button type="button" onClick={() => console.log(musicList)}>
          test
        </button> */}
      </div>
    </Layout>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired,
};

CancelIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
