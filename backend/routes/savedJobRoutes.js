import express from "express";

import {
  saveJob,
  getSavedJobs,
  removeSavedJob,
} from "../controllers/savedJobController.js";

import {
  verifyToken,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// SAVE JOB
router.post(
  "/saveJob",
  verifyToken,
  authorizeRoles("student"),
  saveJob
);

// GET SAVED JOBS
router.get(
  "/getSavedJobs",
  verifyToken,
  authorizeRoles("student"),
  getSavedJobs
);

// REMOVE SAVED JOB
router.delete(
  "/removeSavedJob/:jobId",
  verifyToken,
  authorizeRoles("student"),
  removeSavedJob
);

export default router;