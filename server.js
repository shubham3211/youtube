const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dbUrl } = require("./config");
const { readAndSavePlaylistFronCsv } = require("./readAndSavePlaylistFromCsv");
require("dotenv").config();
const port = process.env.PORT || 9000;

require("./config/express")(app);
require("./config/routes")(app);

connect();

function listen() {
  app.listen(port);
  console.log("Express app started on port " + port);
  readAndSavePlaylistFronCsv();
}

function connect() {
  mongoose.connection
    .on("error", console.log)
    .on("disconnected", connect)
    .once("open", listen);

  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
