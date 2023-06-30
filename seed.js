const db = require("./db");
const { Campuses, Students } = require("./db/models");

const seedCampuses = [
  {
    name: "Campus A",
    address: "Address A",
    description: "Description A",
    imageUrl: "http://example.com/imageA.jpg",
  },
  {
    name: "Campus B",
    address: "Address B",
    description: "Description B",
    imageUrl: "http://example.com/imageB.jpg",
  },
  {
    name: "Campus C",
    address: "Address C",
    description: "Description C",
    imageUrl: "http://example.com/imageC.jpg",
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
