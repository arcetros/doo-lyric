import { getLyrics } from 'genius-lyrics-api';

const api = process.env.GENIUS_API;

const handleLyrics = async (req, res) => {
  const { author, title } = req.body;

  if (req.method === 'POST') {
    const options = {
      apiKey: api,
      title: { title },
      artist: author,
      optimizeQuery: true,
    };
    await getLyrics(options)
      .then((lyrics) => {
        res.status(200).json({ lyrics });
      })
      .catch((err) => res.status(400).json({ error: err }));
  }
};

export default handleLyrics;
