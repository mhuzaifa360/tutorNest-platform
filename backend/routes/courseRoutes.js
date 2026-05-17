import express from "express";
import {
  createCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();


// GET ALL COURSES (public ya logged-in)
router.get("/getCourses", verifyToken, getCourses);

// GET SINGLE COURSE
router.get("/getSingleCourse/:id", verifyToken, getSingleCourse);

// CREATE COURSE (teacher only)
router.post("/createCourse",verifyToken,authorizeRoles("teacher"),createCourse);

// UPDATE COURSE (teacher only)
router.put("/updateCourse/:id",verifyToken,authorizeRoles("teacher"),updateCourse);

// DELETE COURSE (can delete only the owner teacher)teacher id must match in course
router.delete("/deleteCourse/:id", verifyToken,authorizeRoles("teacher"),deleteCourse);

export default router;