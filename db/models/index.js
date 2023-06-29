const Campuses = require("./campuses");
const Students = require("./students");

//Associations
Campuses.hasMany(Students);
Students.belongsTo(Campuses);

module.exports = {
  Campuses,
  Students,
};
