
function studentGrade(marks){

    if (marks < 40){
      return "Grade : E";      
     } 
   //   when user inputs a grade that is less than 40, the system will give an output of, "Grade E"
     else if (marks < 49) {
        return "Grade : D"; 
     } 
   //   when user inputs a grade that is less than 49, the system will give an output of, "Grade D"
     else if (marks < 60) {
        return "Grade : C"; 
     } 
   //   when user inputs a grade that is less than 60, the system will give an output of, "Grade C"
     else if (marks < 79) {
        return "Grade : B"; 
     }
   //   when user inputs a grade that is less than 79, the system will give an output of, "Grade B"
     else if (marks <= 100) {
        return "Grade : A"; 
     }
   //   when user inputs a grade that is less than or equal to 100, the system will give an output of, "Grade A"
}

function letterGrade(print) {
    let marks = document.getElementById("input").value
    document.getElementById("letter").textContent = studentGrade(marks)
}
// The function checks what the user has input and runs the input through the function studentGrade(marks), gets the returned value and spit it back to the html where it will display the return value to the user