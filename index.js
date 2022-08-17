const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (selectDrivers) {
    return [selectDrivers[0],selectDrivers[1]]
}
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(selectDrivers) {
    return [selectDrivers[selectDrivers.length-2],selectDrivers[selectDrivers.length-1]]
}
returnLastTwoDrivers(drivers)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = ride => {
    return function fareMultiplier(fare) {
        return ride * fare
    }
}

const twiceFare = createFareMultiplier(2);
function fareDoubler (double) {
    return twiceFare(double)
}

const thriceFare = createFareMultiplier(3);
function fareTripler (thrice) {
    return thriceFare(thrice)
}

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
