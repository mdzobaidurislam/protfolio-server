const Project = require("../models/PojectModel");

//getAllInventory
const getAllProject = async (req, res) => {
  if (req.query.cat) {
    const result = await Project.find({ cat: req.query.cat });
    res.status(200).json(result);
  } else {
    const result = await Project.find({});
    res.status(200).json(result);
  }
};

// add inventory
const addProject = async (req, res) => {
  const result = await Project.create(req.body);
  if (result) {
    res.status(201);
    res.json({
      msg: "Project Successfully Added!",
    });
  } else {
    res.status(404);
    res.json({
      msg: "Project not Added!",
    });
  }
};

// get blog by id
const getProjectById = async (req, res) => {
  const result = await Project.findById(req.params.id);
  if (result) {
    res.status(201).json(result);
  } else {
    res.status(401).res.json("Project not found");
  }
};

module.exports = {
  getAllProject,
  addProject,
  getProjectById,
};
