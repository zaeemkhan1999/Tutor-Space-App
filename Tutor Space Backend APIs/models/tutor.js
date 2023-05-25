const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const T_Location = require('./t_location');


class Tutor extends Model {}

Tutor.init({
  t_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  age: DataTypes.INTEGER,
  experience: DataTypes.INTEGER,
  contact_number: DataTypes.STRING,
  cnic: DataTypes.STRING,
  certification_linkedin: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Tutor',
  tableName: 'tutor',
  timestamps: false,
});

// Tutor-Location association
Tutor.belongsTo(T_Location, { foreignKey: 't_location' });

// // Tutor-Review association
// const T_Review = require('./t_review');
// Tutor.hasMany(T_Review, { foreignKey: 't_id' });



module.exports = Tutor;
