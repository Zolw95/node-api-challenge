const express = require("express");
const actionModel = require("../data/helpers/actionModel");

const router = express.Router();

// GET all actions

router.get("/actions", (req, res) => {
  actionModel
    .get()
    .then((actions) => {
      res.status(201).json(actions);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error getting actions" });
    });
});

// GET action by id

router.get("/actions/:id", (req, res) => {
  actionModel
    .get(req.params.id)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error getting action" });
    });
});

// ADD action

router.post("/actions", (req, res) => {
  actionModel
    .insert({ ...req.body })
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error posting action" });
    });
});

// Update action

router.put("/actions/:id", (req, res) => {
  actionModel
    .update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error updating action" });
    });
});

// REMOVE action by id

router.delete("/actions/:id", (req, res) => {
  actionModel
    .remove(req.params.id)
    .then((action) => {
      res.status(201).json({ message: `${action} Action Deleted` });
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(500).json({ message: "Error Deleting action" });
    });
});

module.exports = router;
