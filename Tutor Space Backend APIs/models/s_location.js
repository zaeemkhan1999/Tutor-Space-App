const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class S_Location extends Model {}

S_Location.init({
  sl_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  longitude: DataTypes.DOUBLE,
  latitude: DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'S_Location',
  tableName: 's_location',
  timestamps: false,
});

module.exports = S_Location;
