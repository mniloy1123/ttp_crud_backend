const { Sequelize } = require("sequelize");
const { name } = require("../package.json");

const db = new Sequelize(`postgres://localhost:5432/${name}`, {});

module.exports = db;
