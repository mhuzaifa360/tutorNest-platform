import express from "express";

import {
  applyJob,
  getApplications,
  getSingleApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";

import {
  verifyToken,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// APPLY ON JOB
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

// UPDATE
router.put(
  "/updateApplication/:id",
  verifyToken,
  authorizeRoles("student"),
  updateApplication
);

// DELETE
router.delete(
  "/deleteApplication/:id",
  verifyToken,
  deleteApplication
);

export default router;