// This file contains everything needed to set up a sequelize connection
const Sequelize = require("sequelize");
const synchronizeModels = require("./models/sync");

// Create a sequelize object with the parameters to connect to the 'test' DB
let sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = {
  models: sequelize.models,
  connect: () => {
    login();
    synchronizeModels(sequelize);
  }
};

let login = () => {
  console.log("Connecting to SQL Database using Sequelize");
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection has been established successfully");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
};
