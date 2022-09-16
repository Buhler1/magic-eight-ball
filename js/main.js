const points = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes"
];

let ballAnswer 
function myFunction(){
  points.sort(function(a,b){return 0.5 - Math.random()});
  document.getElementById("ballAnswer").innerHTML=points[0];
  ballAnswer = points[0];
  document.getElementById("ballAnswer").style.fontSize="18px";
  setTimeout(timeup, 4000);

  function timeup(){
    //document.getElementById("ballAnswer").innerHTML="8";
    //document.getElementById("ballAnswer").style.fontSize ="125px";
    //inputAnswer()
    createDiv()
    createP()
    document.getElementById("typeArea").value="";
  }
}

function inputAnswer() {
  const previousQuestion = document.getElementById("typeArea").value;
  userQuestion.innerHTML = previousQuestion
  const questionAsked = document.getElementById("questions-asked")
  questionAsked.appendChild(userQuestion)
}

function createDiv() {
  const div = document.createElement("div")
  div.classList.add("question-answers")
  document.getElementById("questions-asked").appendChild(div)
}

function createP() {
  let userQuestion = document.createElement("p")
  const ballResponse = document.createElement("p")
  userQuestion.innerHTML=document.getElementById("typeArea").value;
  let lastIndex = document.getElementsByClassName("question-answers").length-1;
  const lastElement = document.getElementsByClassName("question-answers")[lastIndex];
  userQuestion.classList.add("")
  lastElement.appendChild(userQuestion)
  ballResponse.innerHTML=ballAnswer;
  ballResponse.classList.add("")
  lastElement.appendChild(ballResponse)
}