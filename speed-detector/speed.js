function speedDetector(speed) {
    if (speed < 70) {
        return "Ok"
    } else {
        let n = (speed - 70)/5;
        if (n>12) {
            return "License suspended";
        } else {
            return `Points: ${n}`;
        }
    
    }
}

function ticketPrinter(print) {
    let speed= document.getElementById("input").value
    document.getElementById("conclusion").textContent=speedDetector(speed)
}