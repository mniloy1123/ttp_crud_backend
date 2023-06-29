const express = require("express");
const db = require("./db");
const app = express();
const PORT = "8080";

//Mount on API
app.use("/api", require("./api"));

const syncDB = () => db.sync();

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;
