class jobLine{
    constructor(jobID, jobLineID, serviceListID, jobLineStatusID, jobLineQuantity, jobLineCost){
       this.jobID = jobID;
       this.jobLineID = jobLineID;
       this.serviceListID = serviceListID;
       this.jobLineStatusID = jobLineStatusID;
       this.jobLineQuantity = jobLineQuantity;
       this.jobLineCost = jobLineCost;
    }
}

module.exports = jobLine;