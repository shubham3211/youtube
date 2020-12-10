const { getYoutubePlaylist } = require("../controllers/getYoutubePlaylist");

module.exports = (app) => {
  app.get("/playlist/:playlistId", getYoutubePlaylist);
};
