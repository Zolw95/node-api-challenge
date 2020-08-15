const express = require("express");
const projectModel = require("../data/helpers/projectModel");

const router = express.Router();

// GET All projects

router.get("/projects", (req, res) => {
  projectModel
    .get()
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => res.status(400).json({ message: error }));
});

// GET project by id

router.get("/projects/:id", (req, res) => {
  projectModel
    .get(req.params.id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => res.status(400).json({ message: error }));
});

// GET project actions

router.get("/projects/:id/actions", (req, res) => {
  projectModel
    .getProjectActions(req.params.id)
    .then((actions) => {
      res.status(201).json(actions);
    })
    .catch((error) => res.status(400).json({ message: error }));
});

// REMOVE project

router.delete("/projects/:id", (req, res) => {
  projectModel
    .remove(req.params.id)
    .then((project) => {
      res.status(201).json(`${project} Project Deleted`);
    })
    .catch((error) => res.status(400).json({ message: error }));
});

// ADD project

router.post("/projects", (req, res) => {
  projectModel
    .insert({ ...req.body })
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error posting project" });
    });
});

// UPDATE project
router.put("/projects/:id", (req, res) => {
  projectModel
    .update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => next());
});

module.exports = router;
