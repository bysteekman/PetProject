const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'db_name',
  'user',
  'password',
  {
    dialect: 'postgres',
  }
);

module.exports = sequelize;