import { Review } from "../models/index.js";

export const calculateMatchScore = async (student, teacher) => {
  let score = 0;

  // ⭐ SUBJECT MATCH (MOST IMPORTANT)
  const studentSubjects = student.subjects || [];
  const teacherSubjects = teacher.subjects || [];

  const subjectMatch = teacherSubjects.filter((sub) =>
    studentSubjects.includes(sub)
  );

  score += subjectMatch.length * 40;

  // 📍 CITY MATCH
  if (student.city === teacher.city) {
    score += 20;
  }

  // 🎓 EXPERIENCE
  score += (teacher.experience || 0) * 3;

  // 💰 BUDGET MATCH
  const studentBudget = student.budget || 0;

  if (studentBudget >= teacher.hourlyFee) {
    score += 20;
  } else {
    score -= 10;
  }

  // ⭐ RATING
  const reviews = await Review.findAll({
    where: { teacherId: teacher.id },
  });

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
      : 0;

  score += avgRating * 10;

  return score;
};