const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const S_Location = require('./s_location');
//const S_Review = require('./s_review');

class Student extends Model {}

Student.init({
  s_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  address: DataTypes.STRING,
  age: DataTypes.INTEGER,
  contact_number: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Student',
  tableName: 'student',
  timestamps: false,
});

// Student-Location association
Student.belongsTo(S_Location, { foreignKey: 's_location' });

// // Student-Review association
// Student.hasMany(S_Review, { foreignKey: 's_id' });

module.exports = Student;
