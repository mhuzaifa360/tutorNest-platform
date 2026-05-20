import { Job, Application } from "../models/index.js";

// This file contains the logic to calculate a job's score based on various factors like budget, popularity, recency, etc. It can be used in the search controller to rank jobs when fetching them for search results or listings.
export const calculateJobScore = (job, applicationsCount) => {
  let score = 0;

  // 💰 budget boost
  score += (job.budget || 0) / 1000;

  // 🔥 popularity boost
  score += applicationsCount * 2;

  // ⏱ recency boost
  const daysOld =
    (new Date() - new Date(job.createdAt)) / (1000 * 60 * 60 * 24);

  score += Math.max(0, 30 - daysOld); // newer = higher score

  return score;
};

// This function can be used in the controller to rank jobs based on their score
export const rankedJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();

    const ranked = await Promise.all(
      jobs.map(async (job) => {
        const applicationsCount = await Application.count({
          where: { jobId: job.id },
        });

        const score = calculateJobScore(job, applicationsCount);

        return {
          ...job.toJSON(),
          applicationsCount,
          score,
        };
      })
    );

    ranked.sort((a, b) => b.score - a.score);

    return res.json({
      success: true,
      data: ranked,
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
