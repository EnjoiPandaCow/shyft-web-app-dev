var express = require('express');
var router = express.Router();

var ctrlJobs = require('../controllers/jobs.controllers.js');

router
    .route('/jobs')
    .get(ctrlJobs.jobsGetAll);

router
    .route('/jobs/:jobId')
    .get(ctrlJobs.jobsGetOne);

router
    .route('/jobs/new')
    .post(ctrlJobs.jobsAddOne);

module.exports = router;