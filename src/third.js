import "./styles.css";
const maxNumber = document.querySelector('.maxNumber');
const answerNumber = document.querySelector('#guessNumber')
const answerForm = document.querySelector('#answer-form');
const resultText = document.querySelector('#resultText');
const resultAnswer = document.querySelector('#resultAnswer');



function answerSubmit(event) {
  event.preventDefault();
  const randomNumber = Math.ceil(Math.random() * (parseInt(maxNumber.value)+1))-1;
  console.log(randomNumber);
  if (!maxNumber.value || !answerNumber.value) {
    resultText.classList.add("hidden");
    resultAnswer.classList.add("hidden");
    alert("Please enter a number");
    return;
  }
  if (parseInt(maxNumber.value) < 0) {
    resultText.classList.add("hidden");
    resultAnswer.classList.add("hidden");
    alert("No Minus number");
    maxNumber.value = "";
    return;
  } else if (parseInt(answerNumber.value) < 0) {
    resultText.classList.add("hidden");
    resultAnswer.classList.add("hidden");
    alert("No Minus number");
    answerNumber.value = "";
    return;
  }
  if (parseInt(answerNumber.value) > parseInt(maxNumber.value)) {
    resultText.classList.add("hidden");
    resultAnswer.classList.add("hidden");
    answerNumber.value = "";
    alert("must be smaller than maxNumber");
    return;
  }
  if (parseInt(answerNumber.value) === randomNumber) {
    resultText.classList.remove("hidden");
    resultAnswer.classList.remove("hidden");
    resultText.innerText = `You chose : ${answerNumber.value}, the machine chose : ${randomNumber}.`;
    resultAnswer.innerText = "You Win!";

  } else {
    resultText.classList.remove("hidden");
    resultAnswer.classList.remove("hidden");
    resultText.innerText = `You chose : ${answerNumber.value}, the machine chose : ${randomNumber}.`;
    resultAnswer.innerText = "You Lost!";
  }
}



answerForm.addEventListener("submit", answerSubmit);
