import { getSong } from 'genius-lyrics-api';

const api = 'h6CEqgnJ3h8SASwNR1TQCha90V91ciIJTYwbnLWzGaRGkLTrrxsFcEgWf1N8KxsL';

const handleLyrics = async (req, res) => {
  const { author, title } = req.body;
  if (req.method === 'POST') {
    const options = {
      apiKey: api,
      title: { title },
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
