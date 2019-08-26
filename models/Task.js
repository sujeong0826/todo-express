module.exports = (sequelize, DataTypes) => {
  sequelize.define("Task", {
    title: DataTypes.STRING,
    deadline: DataTypes.DATE,
    done: DataTypes.BOOLEAN
  });
};
