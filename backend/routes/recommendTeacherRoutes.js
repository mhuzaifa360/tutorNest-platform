import express from "express";
import { recommendTeachers } from "../controllers/recommendTeacherController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// 👨‍🎓 ONLY STUDENTS GET RECOMMENDATIONS
router.get(
  "/recommendTeachers",
  verifyToken,
  authorizeRoles("student"),  
  recommendTeachers
);

export default router;