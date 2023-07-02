const express = require("express");
const db = require("./db");
const app = express();
const PORT = "8080";
const cors = require('cors');

app.use(cors());

//Parse JSON bodies
app.use(express.json());


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
