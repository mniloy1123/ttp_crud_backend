const express = require("express");
const app = express();
const PORT = "8080";

//Mount on API
app.use("/api", require("./api"));

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};


serverRun();

module.exports = app;