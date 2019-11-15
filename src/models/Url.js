const { Model } = require("sequelize");

class Url extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        originUrl: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        },
        shortUrl: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        }
      },
      {
        sequelize,
        tableName: "card",
        paranoid: true
      }
    );
  }
}

module.exports = Url;