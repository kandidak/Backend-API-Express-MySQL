import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const MainTujuan = db.define('main-tujuans',{
    idJudul: DataTypes.INTEGER,
    listTujuan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default MainTujuan;

(async()=>{
    await db.sync();
})();