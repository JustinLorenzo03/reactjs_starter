import React, { Component } from "react";

var counter = 0;
var timeleft = 10;

function Timer() {
    var timer;
    timer(timeleft - counter); 
    
    function timeIt() {
        counter++;
        timer(timeleft - counter);
    }
    setInterval(timeIt, 1000);
}
 export default Timer;
