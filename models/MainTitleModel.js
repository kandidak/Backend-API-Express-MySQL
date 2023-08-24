import { Sequelize, UUID, UUIDV4 } from "sequelize";
import db from "../config/Database.js";
import MainContent from "./MainContentModel.js";

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

export default MainTitle;

(async () => {
  await db.sync();
})();
