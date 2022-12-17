const express = require('express');
const fs = require('fs');
const router = express.Router();
const jobsController = require('../controllers/jobsController');


router.route("/search").post(jobsController.getJobs)
    

module.exports = router;