const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class T_Location extends Model {}

T_Location.init({
  tl_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  longitude: DataTypes.DOUBLE,
  latitude: DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'T_Location',
  tableName: 't_location',
  timestamps: false,
});

module.exports = T_Location;
