const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tutor = require('./tutor');

class Tutor_pop_up extends Model {}

Tutor_pop_up.init({
  tpu_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tutor_longitude: DataTypes.DOUBLE,
  tutor_latitude: DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'Tutor_pop_up',
  tableName: 'tutor_pop_up',
  timestamps: false,
});

// Tutor-Tutor_pop_up association
Tutor_pop_up.belongsTo(Tutor, { foreignKey: 't_id' });

module.exports = Tutor_pop_up
