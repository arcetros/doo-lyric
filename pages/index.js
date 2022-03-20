import { useState } from 'react';
import PropTypes from 'prop-types';
import { getMusicInfo } from '../hooks';

function Item({ title, artist }) {
  return (
    <li>
      <h1>
        {title} by {artist}
      </h1>
    </li>
  );
}

export default function Home() {
  const [isloading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [musicList, setMusicList] = useState([]);

  getMusicInfo({ inputValue, setIsLoading, setMusicList });

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {inputValue.trim() !== '' && (
        <div className="bg-red-500 w-5">
          {isloading ? (
            'Loading...'
          ) : (
            <div>
              {musicList && (
                <ul>
                  {musicList.map((item) => (
                    <Item title={item.title} artist={item.artist.name} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
