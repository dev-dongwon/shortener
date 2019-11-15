const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");
const Url = require('./Url');

const sequelize = new Sequelize(config.db.url);
Url.init(sequelize, DataTypes);

module.exports = sequelize;