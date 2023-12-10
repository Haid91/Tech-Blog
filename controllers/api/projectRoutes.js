// Importing necessary modules
const express = require('express');
const router = express.Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Handler for creating a new project
router.post('/', withAuth, async (req, res) => {
  try {
    const projectDetails = {
      ...req.body,
      user_id: req.session.user_id,
    };
    const newProject = await Project.create(projectDetails);
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Handler for deleting a project
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectDeletion = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectDeletion) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectDeletion);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exporting the router
module.exports = router;