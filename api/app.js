const express = require("express");
const start = require('./database');
const statusRouter = require("./routes/status");
const itemRouter = require("./routes/itemRoute");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

// start database connection
start();

app.use(express.static("static"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes

app.use('/status', statusRouter);
app.use('/api/item', itemRouter);

module.exports = app;