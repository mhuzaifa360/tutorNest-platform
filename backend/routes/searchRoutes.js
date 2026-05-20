import express from "express";
import {
  searchTeachers,
  searchJobs,
  searchCourses,
} from "../controllers/searchController.js";

const router = express.Router();

// TEACHERS
router.get("/teachers", searchTeachers);

// JOBS
router.get("/jobs", searchJobs);

// COURSES
router.get("/courses", searchCourses);

export default router;