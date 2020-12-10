const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
var morgan = require("morgan");
const compression = require("compression");
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
