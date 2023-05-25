const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project', 'postgres', 'ZeeKay@1999', {
  host: 'localhost',
  port:5432,
  dialect: 'postgres',
});

module.exports = sequelize;
