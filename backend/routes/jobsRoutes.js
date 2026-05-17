import express from "express";
import { createJob, getJobs,  getSingleJob, updateJob, deleteJob} from "../controllers/jobControllers.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE JOB (student only)
router.post("/createJob",verifyToken,authorizeRoles("student"),createJob);

// GET ALL JOBS
router.get("/getJobs", verifyToken, getJobs); // only teacher

// GET SINGLE JOB
router.get("/getSingleJob/:id", verifyToken, getSingleJob); 

// UPDATE JOB
router.put("/updateJob/:id",verifyToken,authorizeRoles("student"),  updateJob);

// DELETE JOB
router.delete("/deleteJob/:id",  verifyToken,authorizeRoles("student"),deleteJob);

export default router;