const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const { DataTypes } = Sequelize;

const Contact = db.define('contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    companyName: DataTypes.STRING,
    numberOfEmployee: DataTypes.INTEGER,
    product: DataTypes.STRING,
}, {
    freezeTableName: true
});

module.exports = Contact;

(async () => {
    await db.sync();
})();