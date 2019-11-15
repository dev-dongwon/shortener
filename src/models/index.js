const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.db.url);

module.exports = sequelize;