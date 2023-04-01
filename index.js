/* Your Code Here */
//function createEmployeeRecord
function createEmployeeRecord(array){
    return  {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

// function createEmployeeRecords
function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

//function createTimeInEvent
function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    })
    return this;
}

//function createTimeOutEvent
function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    })
    return this;
}

//calculate the hours worked
function hoursWorkedOnDate(dateHours){
    const timeInHour = this.timeInEvents.find(dateStamp => dateStamp.date === dateHours).hour
    const timeOutHour = this.timeOutEvents.find(dateStamp => dateStamp.date === dateHours).hour
    const totalHours = (timeOutHour - timeInHour)
    return totalHours / 100
}

//calculate wages earned on date
function wagesEarnedOnDate(dateHours){
    const wagedHours = hoursWorkedOnDate.call(this, dateHours);
    const employeeWage = wagedHours * this.payPerHour;
    return parseFloat(employeeWage.toString());
}

//find employee by first name
function findEmployeeByFirstName(emptyArray, firstName){
    return emptyArray.find((employee) => {
        return employee.firstName === firstName;
    });
}

// calculate payroll
function calculatePayroll(employeeArray){
    return employeeArray.reduce((accumulator, record) =>{
        return accumulator + allWagesFor.call(record);
    }, 0);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

//create employee record function




