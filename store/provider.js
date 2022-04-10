import { useEffect, useReducer, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MusicContext } from './context';
import reducer from './reducer';

const defaultState = {
  musicList: [],
  inputValue: '',
  isLoading: false,
  selectedMusic: null,
  loadingLyric: false,
  songLyric: '',
  alert: '',
  showModal: false,
};

function MusicProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleInputValue = (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: value });
  };

  const handleClearList = () => {
    dispatch({ type: 'CLEAR_MUSIC_LIST', payload: [] });
  };

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const selectMusicHandler = async (music) => {
    dispatch({ type: 'LYRIC_REQUESTED' });
    dispatch({ type: 'SELECT_MUSIC', payload: music });
    await axios
      .post('/api/getlyrics', {
        author: music.author,
        songTitle: music.songTitle,
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.lyrics != null) {
            dispatch({ type: 'GET_LYRIC', payload: res.data.lyrics });
            dispatch({ type: 'LYRIC_RECEIVED' });
          } else {
            dispatch({ type: 'LYRIC_NULL', payload: "We couldn't find any lyric for this song yet" });
          }
        }
      })
      .catch((err) => {
        dispatch({ type: 'LYRIC_NULL', payload: err });
      });
  };

  const handleMusicList = () => {
    const url = process.env.NEXT_PUBLIC_MUSIC_URI;
    if (state.inputValue.trim() !== '') {
      axios
        .get(
          `${url}=${encodeURI(
            state.inputValue
              .trim()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
          )}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            if (res.data.data.length !== 0) {
              dispatch({ type: 'SEARCH_RECEIVED', payload: res.data.data.slice(0, 5) });
            } else {
              dispatch({ type: 'SEARCH_NULL', payload: 'No results found' });
            }
          }
        });
    }
  };
  useEffect(() => {
    dispatch({ type: 'SEARCH_REQUESTED' });

    const timer = setTimeout(() => {
      if (state.inputValue) handleMusicList();
    }, 700);
    return () => clearTimeout(timer);
  }, [state.inputValue]);

  const context = useMemo(
    () => ({
      inputValue: state.inputValue,
      setInputValue: handleInputValue,
      isLoading: state.isLoading,
      alert: state.alert,
      musicList: state.musicList,
      songLyric: state.songLyric,
      showModal: state.showModal,
      toggleModal: handleToggle,
      loadingLyric: state.loadingLyric,
      deleteMusicList: handleClearList,
      setMusicList: handleMusicList,
      selectedMusic: state.selectedMusic,
      setSelectedMusic: selectMusicHandler,
    }),
    [
      state.inputValue,
      state.musicList,
      state.selectedMusic,
      state.isLoading,
      state.songLyric,
      state.showModal,
      state.alert,
      state.loadingLyric,
    ],
  );

  return <MusicContext.Provider value={context}>{children}</MusicContext.Provider>;
}

export default MusicProvider;

MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
