const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Récupérer tous les projets
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Créer un nouveau projet
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProject = new Project({ name, description });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 