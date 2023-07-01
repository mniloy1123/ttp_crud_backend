const db = require("./db");
const { Campuses, Students } = require("./db/models");

const seedCampuses = [
  {
    name: "Campus A",
    address: "Address A",
    description: "Description A",
    imageUrl: "https://www.ccny.cuny.edu/sites/default/files/2020-08/princeton_review_arwu_rankings_2021.jpg",
  },
  {
    name: "Campus B",
    address: "Address B",
    description: "Description B",
    imageUrl: "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
  },
  {
    name: "Campus C",
    address: "Address C",
    description: "Description C",
    imageUrl: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png",
  },
];
const seed = async () => {
  // Create campuses and get them back with their IDs
  const createdCampuses = await Campuses.bulkCreate(seedCampuses, {
    returning: true,
  });

  const seedStudents = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      imageUrl: "http://example.com/studentA.jpg",
      gpa: 3.5,
      campusId: createdCampuses[0].id,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      imageUrl: "http://example.com/studentB.jpg",
      gpa: 3.6,
      campusId: createdCampuses[1].id,
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      email: "bob.smith@example.com",
      imageUrl: "http://example.com/studentC.jpg",
      gpa: 3.7,
      campusId: createdCampuses[2].id,
    },
  ];

  await Students.bulkCreate(seedStudents);
};

seed().then(() => process.exit());
