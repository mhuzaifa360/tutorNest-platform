import { Student, Teacher, Job, Application, Review } from "../models/index.js";

// ============================
// ADMIN DASHBOARD STATS
// ============================
export const getAdminStats = async (req, res) => {
  try {
    const totalStudents = await Student.count();
    const totalTeachers = await Teacher.count();
    const totalJobs = await Job.count();
    const totalApplications = await Application.count();
    const totalReviews = await Review.count();

    const approvedTeachers = await Teacher.count({
      where: { status: "approved" },
    });

    const pendingTeachers = await Teacher.count({
      where: { status: "pending" },
    });

    const rejectedTeachers = await Teacher.count({
      where: { status: "rejected" },
    });

    const activeJobs = await Job.count({
      where: { status: "open" },
    });

    return res.status(200).json({
      success: true,
      data: {
        users: {
          students: totalStudents,
          teachers: totalTeachers,
        },
        teachersStatus: {
          approved: approvedTeachers,
          pending: pendingTeachers,
          rejected: rejectedTeachers,
        },
        jobs: {
          total: totalJobs,
          active: activeJobs,
        },
        applications: totalApplications,
        reviews: totalReviews,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching admin stats",
      error: error.message,
    });
  }
};