const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tutor = require('./tutor');

class Tutor_availability extends Model {}

Tutor_availability.init({
  ta_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  day_of_week: DataTypes.STRING,
  start_time: DataTypes.TIME,
  end_time: DataTypes.TIME,
  rate_per_hour: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'Tutor_availability',
  tableName: 'tutor_availability',
  timestamps: false,
});

// Tutor-Tutor_availability association
Tutor_availability.belongsTo(Tutor, { foreignKey: 't_id' });

module.exports = Tutor_availability;
