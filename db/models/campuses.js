const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Campuses = db.define("campuses", {
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Campuses;
