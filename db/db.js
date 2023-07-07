const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialectModule: require("pg"),
});

module.exports = db;
