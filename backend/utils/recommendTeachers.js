import { Review } from "../models/index.js";

export const calculateMatchScore = async (student, teacher) => {
  let score = 0;

  // Helper function to safely parse subjects
  const parseSubjects = (subjects) => {
    console.log("Raw subjects:", subjects, "Type:", typeof subjects);
    
    if (Array.isArray(subjects)) return subjects;
    if (typeof subjects === "string") {
      try {
        const parsed = JSON.parse(subjects);
        // console.log("Parsed from string:", parsed);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        // console.log("Failed to parse JSON:", e.message);
        return [];
      }
    }
    if (subjects === null || subjects === undefined) return [];
    // If it's an object but not an array, try to convert
    if (typeof subjects === "object") {
      return Array.isArray(subjects) ? subjects : [];
    }
    return [];
  };

  // ⭐ SUBJECT MATCH (MOST IMPORTANT)
  const studentSubjects = parseSubjects(student.subjects);
  const teacherSubjects = parseSubjects(teacher.subjects);

  console.log("Student subjects after parse:", studentSubjects);
  console.log("Teacher subjects after parse:", teacherSubjects);

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