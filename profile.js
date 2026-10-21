


// Section 1: Declare student profile variables.
const studentName = "John Oliver";
const age = 22;
const isEnrolled = true;
let midtermGrade;
const scholarship = null;
const subjects = ["IT103", "Programming ", ]


// Display each variable and its data type.
console.log("STUDENT PROFILE DATA");
console.log("--------------------");
console.log("Student Name:", studentName, "| Type:", typeof studentName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("Midterm Grade:", midtermGrade, "| Type:", typeof midtermGrade);
console.log("Scholarship:", scholarship, "| Type:", typeof scholarship);
console.log("Subjects:", subjects, "| Type:", typeof subjects);

// Demonstrate addition without converting a string.
const scoreText = "85";
console.log("\nADDITION WITHOUT CONVERSION");
console.log("Score text + 10:", scoreText + 10);

//  Convert the score string into a number.
console.log("\nADDITION WITH CONVERSION");
console.log("Converted score + 10:", Number(scoreText) + 10);

// Create a sentence using a template literal.
console.log("\nSTUDENT SUMMARY");
const summary = `My name is ${studentName}, I am ${age} years old, and my score is ${Number(scoreText)}.`;
console.log(summary);
