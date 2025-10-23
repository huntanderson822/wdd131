/*Activity 1*/
//const steps = ["one", "two", "three"];
//function listTemplate(step) { return `<li>${step}</li>`; }
//const stepsHtml = steps.map(listTemplate);
//document.querySelector("#myList").innerHTML = stepsHtml.join("");

/*Activity 2*/
//const grades = ["A", "B", "A"];
//function convertGradeToPoints(grade) {
//  let points = 0;
//  if (grade === "A") points = 4;
//  else if (grade === "B") points = 3;
  //return points;
//}
//const gpaPoints = grades.map(convertGradeToPoints);
//document.querySelector("#myList").innerHTML = `<li>${gpaPoints.join(", ")}</li>`;

/*Activity 3*/
//const grades3 = ["A", "B", "A", "B"];
//function convert3(grade) { return grade === "A" ? 4 : grade === "B" ? 3 : 0; }
//const gpaPoints3 = grades3.map(convert3);
//const pointsTotal3 = gpaPoints3.reduce((total, item) => total + item);
//const gpa3 = pointsTotal3 / gpaPoints3.length;
//document.querySelector("#myList").innerHTML = `<li>GPA: ${gpa3.toFixed(2)}</li>`;


/* Activity 4 */
//const words = ["watermelon", "peach", "apple", "tomato", "grape"];
//const shortWords = words.filter(word => word.length < 6);
//document.querySelector("#myList").innerHTML = shortWords.map(w => `<li>${w}</li>`).join("");


/*Activity 5 */
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#myList").innerHTML =
  `<li>luckyNumber ${luckyNumber} found at index ${luckyIndex}</li>`;
