function speedDetector(speed) {
    if (speed < 70) {
        return "Ok"
    } 
    // If the speed detected by the user is less than 70, the function returns a value, "Ok"
    
    else {
        let n = (speed - 70)/5;
        if (n>12) {
            return "License suspended";
        } else {
            return `Points: ${n}`;
        }
    
    }
    // If the speed detected by the user is greater than 70, the function checks for the difference between the speed and 70. It then divides the difference by 5.
    // If the result is more than 12, it will return a value of "License suspende". If it is less than 12, it will return a value of `points "(result)"`
}

function ticketPrinter(print) {
    let speed= document.getElementById("input").value
    document.getElementById("conclusion").textContent=speedDetector(speed)
}
// This function checks what the user has input and runs the input through the function speedDetector(speed), gets the returned value and spit it back to the html where it will display the return value to the user