const name = document.getElementById("name");
const score = document.getElementById("score");
const dispscore = document.getElementById("dispscore");
const dispgrade = document.getElementById("dispgrade");
const dispname = document.getElementById("dispname");
// const  bottom = document.getElementById("")
// const  = document.getElementById("")
// const  = document.getElementById("")
// const  = document.getElementById("")
// const  = document.getElementById("")

function checkGrade() {
  const nameVal = name.value;
  const scoreVal = Number(score.value);
  const grade = checker(scoreVal);

  if (nameVal === "" || scoreVal === "") {
    alert("Please enter name and score");
    return;
  } else if (scoreVal > 100 || scoreVal < 0) {
    alert("Invalid score");
    return;
  }

  dispname.innerText = nameVal;
  dispgrade.style.color = getGradeColor(grade);
  dispgrade.innerText = grade;
  dispscore.innerText = scoreVal;
  students.push({
    name:nameVal,
    score:scoreVal,
    grade:grade
  });
  
}
function checker(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }

}

function getGradeColor(grade) {
  switch (grade) {
    case "A":
      return "green";
    case "B":
      return "lightgreen";
    case "C":
      return "yellow";
    case "D":
      return "orange";
    case "F":
      return "red";
    default:
      return "";
  }
}

function clearAll() {
 students = [];
dispgrade.innerText= "";
dispname.innerText = "";
dispscore.innerText = "";
dispgrade.style.color = "";
document.querySelector(".bottom").innerHTML = "";

}

 let students = []
function showAll() {
 
  let list = document.querySelector(".bottom")
  list.innerHTML = " ";
  for (let i = 0; i < students.length; i++ ) {
    let student =students[i];

    let p = document.createElement("p");
    p.textContent = student.name + "..." + student.grade;
    let color = getGradeColor(student.grade)
    p.style.color = color;

    list.appendChild(p);
  }
}