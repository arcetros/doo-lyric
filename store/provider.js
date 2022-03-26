import { useEffect, useReducer, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MusicContext } from './context';

const defaultState = {
  musicList: [],
  inputValue: '',
  isLoading: false,
  selectedMusic: {},
};

const reducer = (state, action) => {
  if (action.type === 'SET_INPUT_VALUE') {
    return { ...state, inputValue: action.payload };
  }

  if (action.type === 'SEARCH_REQUESTED') {
    return { ...state, isLoading: true };
  }

  if (action.type === 'SEARCH_RECEIVED') {
    return { ...state, isLoading: false, musicList: action.payload };
  }

  if (action.type === 'CLEAR_MUSIC_LIST') {
    return { ...state, musicList: action.payload };
  }

  return defaultState;
};

function MusicProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleInputValue = (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: value });
  };

  const handleClearList = () => {
    dispatch({ type: 'CLEAR_MUSIC_LIST', payload: [] });
  };

  const selectMusicHandler = (id) => {
    dispatch({ type: 'SELECT_MUSIC', payload: id });
  };

  const handleMusicList = () => {
    const url = 'https://doo-proxy.herokuapp.com/https://api.deezer.com/search?q';
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
          dispatch({ type: 'SEARCH_RECEIVED', payload: res.data.data.slice(0, 7) });
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
      musicList: state.musicList,
      deleteMusicList: handleClearList,
      setMusicList: handleMusicList,
      selectedMusic: state.selectedMusic,
      setSelectedMusic: selectMusicHandler,
    }),
    [state.inputValue, state.musicList, state.selectedMusic, state.isLoading],
  );

  return <MusicContext.Provider value={context}>{children}</MusicContext.Provider>;
}

export default MusicProvider;

MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
