import { getSong } from 'genius-lyrics-api';

const api = process.env.NEXT_PUBLIC_GENIUS_API;

const handleLyrics = async (req, res) => {
  const { author, songTitle } = req.body;
  if (req.method === 'POST') {
    const options = {
      apiKey: api,
      title: songTitle,
      artist: author,
      optimizeQuery: true,
    };

    await getSong(options)
      .then((song) => {
        res.status(200).json(song);
      })
      .catch((err) => res.status(400).json({ err }));
  }
};

export default handleLyrics;
