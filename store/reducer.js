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

  if (action.type === 'SELECT_MUSIC') {
    return { ...state, selectedMusic: action.payload };
  }

  if (action.type === 'GET_LYRIC') {
    return { ...state, songLyric: action.payload };
  }

  if (action.type === 'LYRIC_REQUESTED') {
    return { ...state, loadingLyric: true };
  }

  if (action.type === 'LYRIC_RECEIVED') {
    return { ...state, loadingLyric: false };
  }

  if (action.type === 'LYRIC_NULL') {
    return { ...state, alert: action.payload };
  }

  if (action.type === 'CLEAR_MUSIC_LIST') {
    return { ...state, musicList: action.payload, selectedMusic: {}, songLyric: '' };
  }

  if (action.type === 'CLEAR_ALERT') {
    return { ...state, alert: '' };
  }

  return state;
};

export default reducer;
