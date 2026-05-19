import { SavedJob } from "../models/index.js"; 

// SAVE JOB
export const saveJob = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid jobId in the request body",
      });
    }

    // ❌ prevent duplicates
    const exists = await SavedJob.findOne({
      where: { studentId, jobId },
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Job already saved",
      });
    }

    const saved = await SavedJob.create({
      studentId,
      jobId,
    });

    return res.status(201).json({
      success: true,
      message: "Job saved successfully",
      data: saved,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving job",
      error: error.message,
    });
  }
};

// UNSAVE JOB
export const unsaveJob = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { jobId } = req.params;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid jobId in the URL parameters",
      });
    }

    const saved = await SavedJob.findOne({
      where: { studentId, jobId },
    });

    if (!saved) {
      return res.status(404).json({
        success: false,
        message: "Job not saved",
      });
    }

    await saved.destroy();

    return res.status(200).json({
      success: true,
      message: "Job unsaved successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error unsaving job",
      error: error.message,
    });
  }
};

// GET ALL SAVED JOBS
export const getSavedJobs = async (req, res) => {
  try {
    const studentId = req.user.id;

    const savedJobs = await SavedJob.findAll({
      where: { studentId },
    });

    return res.status(200).json({
      success: true,
      data: savedJobs,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching saved jobs",
      error: error.message,
    });
  }
};

export const removeSavedJob = async (req, res) => {
  try {
    const studentId = req.user.id;
    const { jobId } = req.params;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid jobId in the URL parameters",
      });
    }

    const savedJob = await SavedJob.findOne({
      where: { studentId, jobId },
    });

    if (!savedJob) {
      return res.status(404).json({
        success: false,
        message: "Saved job not found",
      });
    }

    await savedJob.destroy();

    return res.status(200).json({
      success: true,
      message: "Job removed from saved list",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error removing saved job",
      error: error.message,
    });
  }
};