const { Sequelize, UUID, UUIDV4 } = require("sequelize");
const db = require("../config/Database.js");

const { DataTypes } = Sequelize;

const MainTujuan = db.define('maintujuans', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    listTujuan: DataTypes.STRING,
}, {
    freezeTableName: true
});

module.exports = MainTujuan;

(async () => {
    await db.sync();
})();