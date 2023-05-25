const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');

class Post extends Model {}

Post.init({
  p_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  subject: DataTypes.STRING,
  price_range: DataTypes.INTEGER,
  duration: DataTypes.STRING,
  requirement: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Post',
  tableName: 'post',
  timestamps: false,
});

// Student-Post association
Post.belongsTo(Student, { foreignKey: 's_id' });
Post.Student = Post.belongsTo(Student, { foreignKey: 's_id' });
module.exports = Post;
