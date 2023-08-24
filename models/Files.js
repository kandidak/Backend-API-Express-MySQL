import { Sequelize, UUID, UUIDV4 } from "sequelize";
import db from "../config/Database";

const { DataTypes } = require("sequelize");

const {DataTypes} = Sequelize;

const File = db.define("File", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uploadDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default File;

(async()=>{
    await db.sync();
})();