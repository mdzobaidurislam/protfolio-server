const express = require("express");
const router = express.Router();
const {
  getAllProject,
  addProject,
  getProjectById,
} = require("../controller/ProjectController");

// project routes
router.get("/project", getAllProject);
router.post("/project", addProject);
router.get("/project/:id", getProjectById);

module.exports = router;
