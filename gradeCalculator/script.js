// for mark from user

var subject1 = parseFloat(prompt("Enter mark for Subject1 (out of 100)"))
var subject2 = parseFloat(prompt("Enter mark for Subject2 (out of 100)"))
var subject3 = parseFloat(prompt("Enter mark for Subject3 (out of 100)"))
var subject4 = parseFloat(prompt("Enter mark for Subject4 (out of 100)"))
var subject5 = parseFloat(prompt("Enter mark for Subject5 (out of 100)"))

// for total mark calculatiuon

var total = subject1 + subject2 + subject3 + subject4 + subject5

var averageMark = total / 5

var grade
if (averageMark >= 90) {
    grade = "A+"
} else if (averageMark >= 80) {
    grade = "A"
} else if (averageMark >= 90) {
    grade = "B+"
} else if (averageMark >= 70) {
    grade = "B"
} else if (averageMark >= 60) {
    grade = "C"
} else if (averageMark >= 50) {
    grade = "D"
} else {
    grade = "F"
}

alert(
    "Results:\n" + 
    "Total Marks: " + total + "/500\n" + 
    "Average Marks: " + averageMark.toFixed(2) + "\n" + 
    "Grade:" + grade
)

