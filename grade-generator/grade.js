
function studentGrade(marks){

    if (marks < 40){
      return "Grade : E";      
     } 
     else if (marks < 49) {
        return "Grade : D"; 
     } 
     else if (marks < 60) {
        return "Grade : C"; 
     } 
     else if (marks < 79) {
        return "Grade : B"; 
     }
     else if (marks <= 100) {
        return "Grade : A"; 
     }
}

function letterGrade(print) {
    let marks = document.getElementById("input").value
    document.getElementById("letter").textContent = studentGrade(marks)
}