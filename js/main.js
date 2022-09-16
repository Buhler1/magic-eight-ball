// all posible answers 8 ball can give
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
// randomly selects an answer for the users question
let ballAnswer 
function myFunction(){
  points.sort(function(a,b){return 0.5 - Math.random()});
  document.getElementById("ballAnswer").innerHTML=points[0];
  ballAnswer = points[0];
  document.getElementById("ballAnswer").style.fontSize="18px";
  setTimeout(timeup, 4000);
// clears text area after 4 seconds and puts answers below
  function timeup(){
    createDiv()
    createP()
    document.getElementById("typeArea").value="";
  }
}
//puts users question below the 8 ball
function inputAnswer() {
  const previousQuestion = document.getElementById("typeArea").value;
  userQuestion.innerHTML = previousQuestion
  const questionAsked = document.getElementById("questions-asked")
  questionAsked.appendChild(userQuestion)
}
// creates div for users questions to go into
function createDiv() {
  const div = document.createElement("div")
  div.classList.add("question-answers")
  document.getElementById("questions-asked").appendChild(div)
}
// inputs text of users questions 
function createP() {
  let userQuestion = document.createElement("p")
  const ballResponse = document.createElement("p")
  userQuestion.innerHTML=document.getElementById("typeArea").value;
  let lastIndex = document.getElementsByClassName("question-answers").length-1;
  const lastElement = document.getElementsByClassName("question-answers")[lastIndex];
  lastElement.appendChild(userQuestion)
  ballResponse.innerHTML=ballAnswer;
  lastElement.appendChild(ballResponse)
}