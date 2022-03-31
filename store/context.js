import React from 'react';

export const MusicContext = React.createContext({
  inputValue: '',
  // eslint-disable-next-line no-unused-vars
  setInputValue: (value) => {},
  musicList: [],
  // eslint-disable-next-line no-unused-vars
  setMusicList: () => {},
  toggleModal: () => {},
  deleteMusicList: () => {},
  selectedMusic: {},
  isLoading: false,
  showModal: false,
  // eslint-disable-next-line no-unused-vars
  setSelectedMusic: (music) => {},
});
