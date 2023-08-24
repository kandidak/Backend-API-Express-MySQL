import {Sequelize, UUID, UUIDV4} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const MainTujuan = db.define('maintujuans',{
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    listTujuan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default MainTujuan;

(async()=>{
    await db.sync();
})();