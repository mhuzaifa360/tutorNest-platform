import express from "express";
import { getAdminStats } from "../controllers/adminAnalyticsController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// ADMIN DASHBOARD STATS
router.get(
  "/adminDashboardStats",
  verifyToken,
  authorizeRoles("admin"),
  getAdminStats
);

export default router;