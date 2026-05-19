import Teacher from '../models/teacherModel.js';
import { Course } from './courseModel.js';
import Student from './studentModel.js';
import { Enrollment } from './enrollmentModel.js';

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

// Student <-> Course (Many-to-Many through Enrollment)
Student.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: "studentId",
  otherKey: "courseId",
  as: "enrolledCourses",
});

Course.belongsToMany(Student, {
  through: Enrollment,
  foreignKey: "courseId",
  otherKey: "studentId",
  as: "students",
});

export { Teacher, Course, Student, Enrollment };