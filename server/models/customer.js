class customer{
    constructor(customerID, customerTypeID, customerRelationshipID,streetNum,unit,prefix,streetName,suffix,unitNum,city,stateID,zip,zip4,customerNote){
        this.customerID = customerID;
        this.customerTypeID = customerTypeID;
        this.customerRelationshipID = customerRelationshipID;
        this.streetNum = streetNum;
        this.unit = unit;
        this.prefix = prefix;
        this.streetName = streetName;
        this.suffix = suffix;
        this.unitNum = unitNum;
        this.city = city;
        this.stateID = stateID;
        this.zip = zip;
        this.zip4 = zip4;
        this.customerNote = customerNote;
    }
}

module.exports = customer;