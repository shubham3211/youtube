const {
  fetchAndSavePlaylist,
  getPlaylistById,
} = require("../services/youtubePlaylist");

const getYoutubePlaylist = async (req, res) => {
  try {
    const playlistId = req.params.playlistId;
    let savedPlaylist = await getPlaylistById(playlistId);
    if (!savedPlaylist) {
      savedPlaylist = await fetchAndSavePlaylist(playlistId);
    }
    res.json({
      message: "playlist fetched",
      playlist: savedPlaylist,
    });
  } catch (err) {
    let status = err.status ? err.status : 500;
    console.log("err", err);
    res.status(status).json({ message: err.message, done: false });
  }
};

module.exports = {
  getYoutubePlaylist,
};
