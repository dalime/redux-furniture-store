const express = require('express');
const router = express.Router();

const Fighter = require('../models/fighter');

router.route('/')
  .get((req, res) => {
    Fighter.find({})
      .then(res.handle)
      .catch(res.error)
  })
  .post((req, res) => {
    Fighter.create(req.body)
      .then(res.handle)
      .catch(res.error)
  })

router.route('/:id')
  .get((req, res) => {
    Fighter.findOne(req.params.id)
      .then(res.handle)
      .catch(res.error)
  })
  .delete((req, res) => {
    Fighter.findByIdAndRemove(req.params.id)
      .then(fighter => res.send())
      .catch(res.error)
  })
  .put((req, res) => {
    Fighter.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(res.handle)
      .catch(res.error)
  })

module.exports = router;
