const csv = require("csvtojson");
const {
  getPlaylistById,
  fetchAndSavePlaylist,
} = require("./services/youtubePlaylist");

const readAndSavePlaylistFronCsv = async () => {
  try {
    const csvData = await csv().fromFile(
      "./SS __ Backend Dev Intern __ Assignment .csv"
    );
    csvData.forEach(async (playlist) => {
      const savedPlaylist = await getPlaylistById(playlist["Playlist ID"]);
      if (!savedPlaylist) {
        fetchAndSavePlaylist(playlist["Playlist ID"]);
      }
    });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { readAndSavePlaylistFronCsv };
