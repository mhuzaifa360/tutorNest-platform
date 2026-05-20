import { Teacher, Review } from "../models/index.js";
import { calculateMatchScore } from "../utils/recommendTeachers.js";

export const recommendTeachers = async (req, res) => {
  try {
    const student = req.user; 
    // (JWT se student id + city + subjects should come)

    const teachers = await Teacher.findAll();

    const scoredTeachers = await Promise.all(
      teachers.map(async (teacher) => {
        const score = await calculateMatchScore(student, teacher);

        const reviews = await Review.findAll({
          where: { teacherId: teacher.id },
        });

        const avgRating =
          reviews.length > 0
            ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
            : 0;

        return {
          ...teacher.toJSON(),
          score,
          rating: Number(avgRating.toFixed(1)),
        };
      })
    );

    // 🔥 SORT BY BEST MATCH
    const sorted = scoredTeachers.sort((a, b) => b.score - a.score);

    return res.status(200).json({
      success: true,
      message: "Recommended teachers fetched",
      data: sorted.slice(0, 10), // top 10
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};