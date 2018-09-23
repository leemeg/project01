/**
 *   @author Marshall, Lee (marshalll@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 1 || created: 09.19.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNum, numBedroom, numBathroom, numCar, cost;


function main() {
    setlotNumber();
    setBedRooms();// Number of bedrooms
    setBathRooms();// Number of bathrooms
    setNumCars();//Number of cars
    setcost();// calculate cost of house
    printResults();

}
main();
function setcost() {
    const BASE_PRICE= 50000,
        PER_BED_PRICE=17000,
        PER_BATH_PRICE=12500,
        PER_CAR_PRICE=6000;
    cost= BASE_PRICE + numBedroom * PER_BED_PRICE + numBathroom * PER_BATH_PRICE + numCar * PER_CAR_PRICE;
}
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nThe cost of a new home in lot number " + lotNum + " of the River Falls subdivision, with " + numBedroom + " bedrooms, " + numBathroom + " bathrooms and a " + numCar + " car garage will be $" + cost);
}
function setlotNumber() {
    lotNum = PROMPT.question(`\nPlease enter a River Falls lot number: `);
}
function setBedRooms() {
    numBedroom = PROMPT.question(`\nHow many bedrooms will the home on lot ` + lotNum + ' have? ');
}
function setBathRooms() {
    numBathroom = PROMPT.question(`\nWith ` + numBedroom + ' bedrooms in the home how many bathrooms would you like? ');
}
function setNumCars() {
    numCar = PROMPT.question(`\nWhat will be the vehicle capacity of the garage? `);
}


/**
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (single/multi line, JSDoc), pragmas, data types
 */