const sequelize =  require('./sequalize.js');
const models = require('./db/models'); // Make sure this points to the file where all your models are imported

sequelize.sync({ force: true }) // WARNING: `{ force: true }` will DROP existing tables and recreate them
  .then(() => {
    console.log("Database tables created successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("Failed to create database tables:", err);
    process.exit(1);
  });