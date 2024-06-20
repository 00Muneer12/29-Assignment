"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain
 fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
 the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["apples", "bananas", "cherry", "PineApple", "Orange", "Coconut"];
if (favorite_fruits.includes("Cherry")) {
    console.log("You really like Cherry!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("PineApple")) {
    console.log("You really like PineApples!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}
if (favorite_fruits.includes("Coconut")) {
    console.log("You really like Coconut!");
}
