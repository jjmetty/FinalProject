class customer{
    constructor(customerID, customerTypeID, customerRelationshipID,companyName,contactLN, contactFN, email, cellPhone, homePhone, businessPhone, fax, contactLN2, contactFN2, email2, cellPhone2, homePhone2, businessPhone2, fax2, streetNum,unit,prefix,streetName,suffix,unitNum,city,stateID,zip,zip4,customerNote){
        this.customerID = customerID;
        this.customerTypeID = customerTypeID;
        this.customerRelationshipID = customerRelationshipID;
        this.companyName = companyName;
        this.contactLN = contactLN;
        this.contactFN = contactFN;
        this.email = email;
        this.cellPhone = cellPhone;
        this.homePhone = homePhone;
        this.businessPhone = businessPhone;
        this.fax = fax;
        this.contactLN2 = contactLN2;
        this.contactFN2 = contactFN2;
        this.email2 = email2;
        this.cellPhone2 = cellPhone2;
        this.homePhone2 = homePhone2;
        this.businessPhone2 = businessPhone2;
        this.fax2 = fax2;
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