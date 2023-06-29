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
      "https://media.istockphoto.com/id/1340766096/photo/beautiful-smiling-female-college-student.jpg?s=612x612&w=0&k=20&c=phSOH_VAm5fszVSnxnPbSjlbne0SpUXRv2VlyrdSihQ=",
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
