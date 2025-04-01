const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const File = sequelize.define("File", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  filePath: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: "processing" }, // processing, completed
});

module.exports = File;
