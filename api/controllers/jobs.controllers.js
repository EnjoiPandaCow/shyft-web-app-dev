var jobData = require('../data/job-data.json');

module.exports.jobsGetAll = function(req,res){
    console.log("GET all jobs");
    console.log(req.query);

    var offset = 0;
    var count = 0;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    var returnData = jobData.slice(offset,offset+count);

    res
        .status(200)
        .json(returnData);
};

module.exports.jobsGetOne = function(req,res){
    var jobId = req.params.jobId;
    var thisJob = jobData[jobId];
    console.log("GET jobId ", jobId);
    res
        .status(200)
        .json(thisJob);
};

module.exports.jobsAddOne = function(req, res) {
    console.log("POST new hotel");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};