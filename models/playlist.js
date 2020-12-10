const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  numberOfVideos: { type: Number },
  description: { type: String },
  thumbnail: { type: String },
  playlistId: { type: String },
});

module.exports = mongoose.model("playlist", PlaylistSchema);
