const Playlist = require("../models/playlist");
const { google } = require("googleapis");
const { printNestedObject } = require("../utils");

const getPlaylistData = async (playlistsId) => {
  try {
    const response = await google.youtube("v3").playlists.list({
      key: process.env.YOUTUBE_API_KEY,
      id: playlistsId,
      part: "snippet,contentDetails,id,localizations,snippet,status",
    });
    printNestedObject(response.data);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

const getPlaylistById = async (playlistId) =>
  await Playlist.findOne({ playlistId });

const fetchAndSavePlaylist = async (playlistId) => {
  try {
    const playlistData = await getPlaylistData(playlistId);
    const playlist = playlistData.items[0];
    const playlistCreated = new Playlist({
      numberOfVideos: playlist.contentDetails.itemCount,
      description: playlist.snippet.description,
      thumbnail: playlist.snippet.thumbnails.medium.url,
      playlistId: playlistId,
    });
    await playlistCreated.save();
    return playlistCreated;
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { getPlaylistData, getPlaylistById, fetchAndSavePlaylist };
