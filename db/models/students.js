const { DataTypes } = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true,
    }
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://img.freepik.com/free-vector/learning-concept-illustration_114360-3896.jpg?w=996&t=st=1688664521~exp=1688665121~hmac=3332f42229dace6f29b796de590b9907aa7e613acc8fa8edded2535d2bf1d898",
  },
  gpa: {
    type: DataTypes.DECIMAL(2, 1), 
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Students;
