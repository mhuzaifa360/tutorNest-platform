import Teacher from '../models/teacherModel.js'
import { Course } from './courseModel.js';

// =========================
// RELATIONSHIP SETUP
// =========================

// Teacher has many Courses
Teacher.hasMany(Course, {
  foreignKey: "teacherId",
  as: "courses",
});

// Course belongs to Teacher
Course.belongsTo(Teacher, {
  foreignKey: "teacherId",
  as: "teacher",
});

export { Teacher, Course };