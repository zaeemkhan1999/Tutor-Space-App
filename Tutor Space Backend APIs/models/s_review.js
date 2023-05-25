const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');
const Tutor = require('./tutor');

class S_Review extends Model {}

S_Review.init({
  sr_id: {
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
  modelName: 'S_Review',
  tableName: 's_review',
  timestamps: false,
});

S_Review.belongsTo(Student, { foreignKey: 's_id' });
S_Review.belongsTo(Tutor, { foreignKey: 't_id' });

module.exports = S_Review;
