const { Sequelize } = require("sequelize");

const db = new Sequelize('dhifarindo_global', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;