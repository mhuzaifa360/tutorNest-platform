import express from "express";

import {
  applyJob,
  getApplications,
  getSingleApplication,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/applicationController.js";

import {
  verifyToken,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// APPLY (TUTOR ONLY)
router.post(
  "/apply",
  verifyToken,
  authorizeRoles("teacher"),
  applyJob
);

// GET ALL
router.get(
  "/getApplications",
  verifyToken,
  getApplications
);

// GET SINGLE
router.get(
  "/getSingleApplication/:id",
  verifyToken,
  getSingleApplication
);

// UPDATE STATUS (STUDENT ONLY)
router.put(
  "/updateApplication/:id",
  verifyToken,
  authorizeRoles("student"),
  updateApplicationStatus
);

// DELETE
router.delete(
  "/deleteApplication/:id",
  verifyToken,
  deleteApplication
);

export default router;