const { Sequelize, UUID, UUIDV4 } = require("sequelize");
const db = require("../config/Database.js");
const MainContent = require("./MainContentModel.js");

const { DataTypes } = Sequelize;

const MainTitle = db.define(
  "main-titles",
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: DataTypes.STRING,
    images: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
    paranoid: true
  },
);

module.exports = MainTitle;

(async () => {
  await db.sync();
})();
