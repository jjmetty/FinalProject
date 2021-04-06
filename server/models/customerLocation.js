class customerLocation{
    constructor(locationID, customerID, streetNum, unit, pre_fix, streetName, suffix, unitNum, city, stateID,
         zip, zip4, keyMap, lotValue, addedValue, propertyValue, nextAnticipatedDate){
        this.locationID = locationID;
        this.customerID = customerID;
        this.streetNum = streetNum;
        this.unit = unit;
        this.pre_fix = pre_fix;
        this.streetName = streetName;
        this.suffix = suffix;
        this.unitNum = unitNum;
        this.city = city;
        this.stateID = stateID;
        this.zip = zip;
        this.zip4 = zip4;
        this.keyMap = keyMap;
        this.lotValue = lotValue;
        this.addedValue = addedValue;
        this.propertyValue = propertyValue;
        this.nextAnticipatedDate = nextAnticipatedDate;
    }
}

module.exports = customerLocation;