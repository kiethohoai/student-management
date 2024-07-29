const { Sequelize } = require('sequelize');
const { DB, HOST, USER, PASSWORD, dialect } = require('../configs/db.conifgs');
const { createStudentModel } = require('./student.model');

// Config
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

// Create Modal "Student"
const Student = createStudentModel(sequelize);

module.exports = {
  sequelize,
  Student,
};
