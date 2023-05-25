const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');

class Student_pop_up extends Model {}

Student_pop_up.init({
  spu_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_longitude: DataTypes.DOUBLE,
  student_latitude: DataTypes.DOUBLE,
}, {
  sequelize,
  modelName: 'Student_pop_up',
  tableName: 'student_pop_up',
  timestamps: false,
});

// Student-Student_pop_up association
Student_pop_up.belongsTo(Student, { foreignKey: 's_id' });

module.exports = Student_pop_up;
