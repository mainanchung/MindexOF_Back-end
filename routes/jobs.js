const express = require('express');
const fs = require('fs');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// router.route("/")
//     .get(jobsController.index)
//     .post(jobsController.getSingleType)   


router.route("/search").post(jobsController.getJobs)
    

module.exports = router;