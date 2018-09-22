/**
 *   @author Marshall, Lee (marshalll@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 1 || created: 09.19.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let LotNum, nBed, nBath, nCar, cost;
const base=50000,pBed=17000 ,pBath=12500 ,pCar=6000;

function main() {
    setLotNum();// Lot Number
    setBedRooms();// Number of bedrooms
    setBathRooms();// Number of bathrooms
    setNumCars();//Number of cars
    setcost();// calculate cost of house
    printResults();

}
main();
function setcost() {
    cost= base + nBed*pBed + nBath*pBath + nCar*pCar;
}
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nThe cost of a new home in lot number " + LotNum + " of the River Falls subdivision, with " + nBed + " bedrooms, " + nBath + " bathrooms and a " + nCar + " car garage will be $" + cost);
}
function setLotNum() {
    LotNum = PROMPT.question(`\nPlease enter a River Falls lot number: `);
}
function setBedRooms() {
    nBed = PROMPT.question(`\nWhat will be the number of bedrooms in the home? `);
}
function setBathRooms() {
    nBath = PROMPT.question(`\nHow many bathrooms will this new home have? `);
}
function setNumCars() {
    nCar = PROMPT.question(`\nWhat will be the vehicle capacity of the garage? `);
}


/**
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (single/multi line, JSDoc), pragmas, data types
 */