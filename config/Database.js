const { Sequelize } = require("sequelize");

const db = new Sequelize('dhip2617_dhifarindo_global', 'dhip2617_admin', 'O&dWgw=OEngQ', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;