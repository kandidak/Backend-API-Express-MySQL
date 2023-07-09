import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import MainTitle from "./MainTitleModel.js";
import MainTujuan from "./MainTujuanModel.js";

const {DataTypes} = Sequelize;

const MainContent = db.define('main-contents',{
    idJudul: DataTypes.INTEGER,
    listMateri: DataTypes.STRING,
},{
    freezeTableName:true
});

// MainContent.hasOne(MainTitle, { foreignKey: 'id' })
MainTitle.hasMany(MainContent, { foreignKey: 'idJudul' });
MainTitle.hasMany(MainTujuan, { foreignKey: 'idJudul' })


export default MainContent;

(async()=>{
    await db.sync();
})();