const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');
const Tutor = require('./tutor');



class T_Review extends Model {}

T_Review.init({
  tr_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'T_Review',
  tableName: 't_review',
  timestamps: false,
});

T_Review.belongsTo(Student, { foreignKey: 's_id' });
T_Review.belongsTo(Tutor, { foreignKey: 't_id' });


module.exports = T_Review;
