const express = require('express');
const fs = require('fs');
const router = express.Router();
const typesController = require('../controllers/typesController');

router.route("/")
    .get(typesController.index)

router.route("/:id")
    .get(typesController.getSingleType)   


module.exports = router;