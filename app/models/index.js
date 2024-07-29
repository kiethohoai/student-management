const { Sequelize } = require('sequelize');
const { DB, HOST, USER, PASSWORD, dialect } = require('../configs/db.conifgs');

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

module.exports = {
  sequelize,
};
