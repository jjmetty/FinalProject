class job{
    constructor(jobID, locationID, jobStatusID, crewID, employeeID, subContractorID, assessmentDate, requestDate, jobStartDate, jobEndDate, jobTotal, bidDescription, proposalDescription, jobInstruction, jobComment){
        this.jobID = jobID;
        this.locationID = locationID;
        this.jobStatusID = jobStatusID; 
        this.crewID = crewID;
        this.employeeID = employeeID;
        this.subContractorID = subContractorID;
        this.assessmentDate = assessmentDate;
        this.requestDate = requestDate;
        this.jobStartDate = jobStartDate;
        this.jobEndDate = jobEndDate;
        this.jobTotal = jobTotal;
        this.bidDescription = bidDescription;
        this.proposalDescription = proposalDescription;
        this.jobInstruction = jobInstruction;
        this.jobComment = jobComment;
      
        }
}

module.exports = job;