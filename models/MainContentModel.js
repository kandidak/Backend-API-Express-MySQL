const { Sequelize, UUID, UUIDV4 } = require("sequelize");
const db = require("../config/Database.js");
const MainTitle = require("./MainTitleModel.js");
const MainTujuan = require("./MainTujuanModel.js");

const { DataTypes } = Sequelize;

const MainContent = db.define('maincontents', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    listMateri: DataTypes.STRING,
}, {
    freezeTableName: true
});

// MainContent.hasOne(MainTitle, { foreignKey: 'id' })
MainTitle.hasMany(MainContent, { foreignKey: 'idJudul' });
MainTitle.hasMany(MainTujuan, { foreignKey: 'idJudul' })


module.exports = MainContent;

(async () => {
    await db.sync();
})();