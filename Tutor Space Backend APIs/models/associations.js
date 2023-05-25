const Student = require('./student');
const Tutor = require('./tutor');
const Admin = require('./admin');
const S_Location = require('./s_location');
const T_Location = require('./t_location');
const S_Review = require('./s_review');
const T_Review = require('./t_review');
const Post = require('./post');
const Tutor_availability = require('./tutor_availability');
const Tutor_pop_up = require('./tutor_pop_up');
const Student_pop_up = require('./student_pop_up');


// // Student associations
// Student.belongsTo(S_Location, { foreignKey: 'S_Location' });
// Student.hasMany(S_Review, { foreignKey: 'S_ID' });
// Student.hasMany(Post, { foreignKey: 'S_ID' });
// Student.hasMany(Tutor_pop_up, { foreignKey: 'S_ID' });

// // Tutor associations
// Tutor.belongsTo(T_Location, { foreignKey: 'T_Location' });
Tutor.hasMany(T_Review, { foreignKey: 'T_ID' });
// Tutor.hasMany(Post, { foreignKey: 'T_ID' });
// Tutor.hasMany(Tutor_availability, { foreignKey: 'T_ID' });
// Tutor.hasMany(Tutor_pop_up, { foreignKey: 'T_ID' });

// // Admin associations
// // ...

// // S_Location associations
// S_Location.hasMany(Student, { foreignKey: 'S_Location' });

// // T_Location associations
// T_Location.hasMany(Tutor, { foreignKey: 'T_Location' });

// // S_Review associations
// S_Review.belongsTo(Student, { foreignKey: 'S_ID' });

// // T_Review associations
// T_Review.belongsTo(Tutor, { foreignKey: 'T_ID' });

// // Post associations
// Post.belongsTo(Student, { foreignKey: 'S_ID' });
// Post.belongsTo(Tutor, { foreignKey: 'T_ID' });

// // Tutor_availability associations
// Tutor_availability.belongsTo(Tutor, { foreignKey: 'T_ID' });

// // Tutor_pop_up associations
// Tutor_pop_up.belongsTo(Tutor, { foreignKey: 'T_ID' });
// Tutor_pop_up.belongsTo(S_Location, { foreignKey: 'Spu_ID' });

// // Student_pop_up associations
// Student_pop_up.belongsTo(Student, { foreignKey: 'S_ID' });
// Student_pop_up.belongsTo(T_Location, { foreignKey: 'Tpu_ID' });

module.exports = { Student, Tutor, Admin, S_Location, T_Location, S_Review, T_Review, Post, Tutor_availability, Tutor_pop_up, Student_pop_up };
