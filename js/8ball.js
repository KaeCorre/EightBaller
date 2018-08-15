function getAnswer() {
  let answerNumber = Math.floor(Math.random() * (20 - 1) + 1);
  switch (answerNumber) {
    case 1:
      answerPhrase = "It is certain.";
      break;
    case 2:
      answerPhrase = "It is decidedly so.";
      break;
    case 3:
      answerPhrase = "Without a doubt.";
      break;
    case 4:
      answerPhrase = "Yes - definitely.";
      break;
    case 5:
      answerPhrase = "You may rely on it.";
      break;
    case 6:
      answerPhrase = "As I see it, yes.";
      break;
    case 7:
      answerPhrase = "Most likely.";
      break;
    case 8:
      answerPhrase = "Outlook good.";
      break;
    case 9:
      answerPhrase = "Yes.";
      break;
    case 10:
      answerPhrase = "Signs point to yes.";
      break;
    case 11:
      answerPhrase = "Reply hazy, try again";
      console.log('Reply hazy, try again');
      break;
    case 12:
      answerPhrase = "Ask again later.";
      break;
    case 13:
      answerPhrase = "Better not tell you now.";
      break;
    case 14:
      answerPhrase = "Cannot predict now.";
      break;
    case 15:
      answerPhrase = "Concentrate and ask again.";
      break;
    case 16:
      answerPhrase = "Don't count on it.";
      break;
    case 17:
      answerPhrase = "My reply is no.";
      break;
    case 18:
      answerPhrase = "My sources say no";
      break;
    case 19:
      answerPhrase = "Outlook not so good.";
      break;
    case 20:
      answerPhrase = "Very doubtful.";
      break;
    default:
      break;
  }
  document.getElementById("answer").innerHTML = answerPhrase;
  console.log(answerNumber);
}

function resetSite() {
  document.getElementById("answer").classList.remove("fadeIn");
  document.getElementById("answer").classList.add("fadeOut");
  document.getElementsByTagName("button")[0].setAttribute("disabled", "");
  setTimeout(fadeOutButton, 1000);
}

function fadeInAnswer() {
  document.getElementById("answer").classList.add("fadeIn");
  setTimeout(fadeInButton, 1500);
}

function fadeInButton () {
  document.getElementsByTagName("button")[0].style.display = "block";
  document.getElementsByTagName("button")[0].classList.add("fadeIn");
}

function fadeOutButton() {
  document.getElementsByTagName("button")[0].classList.remove("fadeIn");
  document.getElementsByTagName("button")[0].classList.add("fadeOut");
  document.getElementById("answer").innerHTML = "";
  setTimeout(hideButton, 600);
}

function hideButton() {
  document.getElementsByTagName("button")[0].style.display = "none";
  resetEightBall();
}

function resetEightBall() {
  document.getElementById("eightball").classList.remove("shake");
  document.getElementById("eightball").classList.add("bob");
  document.getElementsByTagName("button")[0].removeAttribute("disabled");
  document.getElementById("question-input").removeAttribute("disabled");
  document.getElementById("question-input").value = "";
  document.getElementById("question-input").classList.remove("fadeOut");
  document.getElementById("question-input").classList.add("fadeIn");
}

document.getElementById("question").addEventListener("submit", function(event) {
  event.preventDefault();
  if (document.getElementById("question-input").value !== "") {
    document.getElementById("eightball").classList.remove("bob");
    document.getElementById("eightball").classList.add("shake");
    document.getElementById("question-input").setAttribute("disabled", "");
    document.getElementById("question-input").classList.remove("fadeIn");
    document.getElementById("question-input").classList.add("fadeOut");
    setTimeout(fadeInAnswer, 4500);
    getAnswer();
  }
});
