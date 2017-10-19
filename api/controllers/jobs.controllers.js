var jobData = require('../data/job-data.json');

module.exports.jobsGetAll = function(req,res){
    console.log("GET all jobs");
    res
        .status(200)
        .json(jobData);
};

module.exports.jobsGetOne = function(req,res){
    var jobId = req.params.jobId;
    var thisJob = jobData[jobId];
    console.log("GET jobId ", jobId);
    res
        .status(200)
        .json(thisJob);
};