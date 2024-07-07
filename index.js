// Code your solution in this file!
const returnFirstTwoDrivers = ( drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])) => {
    return drivers.slice(0,2);
};
returnFirstTwoDrivers();
const returnLastTwoDrivers = ( drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])) => {
    return drivers.slice(2,4)

}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return (fare) =>{
        return fare * multiplier

    };
};
const fareDoubler = createFareMultiplier(2)
const fareTripler =  createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectingfunction){
    return selectingfunction(drivers)

}
const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
