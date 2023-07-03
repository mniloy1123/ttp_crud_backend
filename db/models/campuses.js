const { DataTypes } = require("sequelize");
const db = require("../db");

const Campuses = db.define("campuses", {
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg?crop=1.00xw:0.752xh;0.00160xw,0.120xh&resize=1200:*",
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
