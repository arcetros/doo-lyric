const reducer = (state, action) => {
  if (action.type === 'SET_INPUT_VALUE') {
    return { ...state, inputValue: action.payload };
  }

  if (action.type === 'SEARCH_REQUESTED') {
    return { ...state, isLoading: true, musicList: [], alert: '' };
  }

  if (action.type === 'SEARCH_RECEIVED') {
    return { ...state, isLoading: false, musicList: action.payload };
  }

  if (action.type === 'SHOW_ALL') {
    return { ...state, musicList: action.payload };
  }

  if (action.type === 'SEARCH_NULL') {
    return { ...state, isLoading: false, alert: action.payload };
  }

  if (action.type === 'SELECT_MUSIC') {
    return { ...state, selectedMusic: action.payload };
  }

  if (action.type === 'GET_LYRIC') {
    return { ...state, songLyric: action.payload };
  }

  if (action.type === 'LYRIC_REQUESTED') {
    return { ...state, loadingLyric: true, songLyric: '' };
  }

  if (action.type === 'LYRIC_RECEIVED') {
    return { ...state, loadingLyric: false };
  }

  if (action.type === 'LYRIC_NULL') {
    return { ...state, alert: action.payload, loadingLyric: false };
  }

  if (action.type === 'CLEAR_MUSIC_LIST') {
    return { ...state, musicList: action.payload, selectedMusic: null, songLyric: '', showModal: false };
  }

  if (action.type === 'CLEAR_ALERT') {
    return { ...state, alert: '' };
  }

  if (action.type === 'TOGGLE_MODAL') {
    return { ...state, showModal: !state.showModal };
  }

  return state;
};

export default reducer;
