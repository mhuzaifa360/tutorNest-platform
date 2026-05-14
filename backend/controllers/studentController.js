import Student from "../models/studentModel.js";

// =========================
// CREATE STUDENT
// =========================
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating student",
      error: error.message,
    });
  }
};

// =========================
// GET ALL STUDENTS
// =========================
export const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    return res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching students",
      error: error.message,
    });
  }
};

// =========================
// GET SINGLE STUDENT
// =========================
export const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching student",
      error: error.message,
    });
  }
};

// =========================
// UPDATE STUDENT
// =========================
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating student",
      error: error.message,
    });
  }
};

// =========================
// DELETE STUDENT
// =========================
export const deleteStudents = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.destroy();

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting student",
      error: error.message,
    });
  }
};