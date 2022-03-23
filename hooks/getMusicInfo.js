import { useEffect } from 'react';
import axios from 'axios';

const musicURI = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q';

const getMusicInfo = ({ inputValue, setIsLoading, setMusicList }) => {
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      if (inputValue.trim() !== '') {
        axios
          .get(
            `${musicURI}=${encodeURI(
              inputValue
                .trim()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''),
            )}`,
          )
          .then((res) => {
            setMusicList(res.data.data.slice(0, 8));
            setIsLoading(false);
          });
      }
    };
    const timer = setTimeout(() => {
      if (inputValue) getData();
    }, 700);
    return () => clearTimeout(timer);
  }, [inputValue]);
};

export default getMusicInfo;
