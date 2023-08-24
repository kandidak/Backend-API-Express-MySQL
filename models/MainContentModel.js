import {Sequelize, UUID, UUIDV4} from "sequelize";
import db from "../config/Database.js";
import MainTitle from "./MainTitleModel.js";
import MainTujuan from "./MainTujuanModel.js";

const {DataTypes} = Sequelize;

const MainContent = db.define('maincontents',{
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
      },
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