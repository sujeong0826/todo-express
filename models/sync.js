// This file should hold all the models in the "models" folder
// Its main purpose is to sync all the models to the database
const Task = require("./Task");
const DataTypes = require("sequelize");

module.exports = sequelize => {
  console.log("Synchronizing models");
  //   Add models to be synchronized to this array
  models = [Task];

  models.forEach(model => {
    model(sequelize, DataTypes);
  });
};
