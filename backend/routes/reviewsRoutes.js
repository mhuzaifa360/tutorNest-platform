import express from "express";

import {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

import {
  verifyToken,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE REVIEW (student only)
router.post(
  "/create",
  verifyToken,
  authorizeRoles("student"),
  createReview
);

// GET ALL
router.get("/", getReviews);

// GET SINGLE
router.get("/:id", getSingleReview);

// UPDATE
router.put(
  "/:id",
  verifyToken,
  authorizeRoles("student"),
  updateReview
);

// DELETE
router.delete(
  "/:id",
  verifyToken,
  deleteReview
);

export default router;