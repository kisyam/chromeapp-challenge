const maxNumber = document.querySelector('.maxNumber');
const answerNumber = document.querySelector('#guessNumber')
const answerForm = document.querySelector('#answer-form');
const resultText = document.querySelector('#resultText');
const resultAnswer = document.querySelector('#resultAnswer');



function answerSubmit(event) {
  event.preventDefault();
  const randomNumber = Math.ceil(Math.random() * maxNumber.value);
  if (maxNumber.value < 0 || parseInt(answerNumber.value) < 0) {
    alert("Please fill plus number");
    return resetNumber();
  }
  if (parseInt(answerNumber.value) === randomNumber) {
    console.log(randomNumber);
    resultText.innerText = `You chose : ${answerNumber.value}, the machine chose : ${randomNumber}.`;
    resultAnswer.innerText = "You Win!";
  } else {
    console.log(randomNumber);
    resultText.innerText = `You chose : ${answerNumber.value}, the machine chose : ${randomNumber}.`;
    resultAnswer.innerText = "You Lost!";
  }
}

function resetNumber() {
  maxNumber.value = "";
  answerNumber.value = "";
}


answerForm.addEventListener("submit", answerSubmit);
