var jobData = require('../data/job-data.json');

module.exports.jobsGetAll = function(req,res){
    console.log("GET the jobs");
    res
        .status(200)
        .json(jobData);
};