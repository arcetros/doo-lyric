import React from 'react';

export const MusicContext = React.createContext({
  inputValue: '',
  // eslint-disable-next-line no-unused-vars
  setInputValue: (value) => {},
  musicList: [],
  // eslint-disable-next-line no-unused-vars
  setMusicList: () => {},
  deleteMusicList: () => {},
  selectedMusic: {},
  isLoading: false,
  // eslint-disable-next-line no-unused-vars
  setSelectedMusic: (music) => {},
});
