import kaboom from "kaboom";

//Overriding kaboom context
export const k = kaboom({
    //No params by default, we are gonna use expecific functions,so we dont need it tyo be global and the scope of all functions to be global
    global: false,
    touchToMouse: true,
    //Our Canvas from index.html
    canvas: document.getElementById("game"),
    debug: false,
})