class employee{
    constructor(employeeID, statusID, firstName, lastName, dob, phone, employeeLanguage, email, crewID){
        this.employeeID = employeeID;
        this.statusID = statusID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.employeeLanguage = employeeLanguage;
        this.email = email;
        this.crewID = crewID;
    }
}

module.exports = employee;
