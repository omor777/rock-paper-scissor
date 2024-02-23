const gameArray = ["rock", "paper", "scissors"];

const gameImage = {
  rock: "../images/rock.png",
  paper: "../images/paper.png",
  scissors: "../images/scissors.png",
};

document.getElementById("computer").src = gameImage.rock;

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

const buttons = document.getElementsByClassName("button");

let scores = localStorage.getItem("scores")
  ? JSON.parse(localStorage.getItem("scores"))
  : { win: 0, lose: 0, tie: 0 };

function updateScoreFromLocalStorage() {
  setInnerText("win", scores.win);
  setInnerText("lose", scores.lose);
  setInnerText("tie", scores.tie);
}
window.onbeforeunload = updateScoreFromLocalStorage;

for (const btn of buttons) {
  btn.addEventListener("click", function (e) {
    const randomNumber = generateRandomNumber();
    const userChose = e.currentTarget.dataset.name;
    const computerChose = gameArray[randomNumber];

    document.getElementById("message").classList.remove("hidden");
    // set image dynamic
    setImage("you", gameImage[userChose]);
    setImage("computer", gameImage[computerChose]);

    // game logic
    if (userChose === "rock" && computerChose === "rock") {
      scores.tie++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("tie", scores.tie);
      setInnerText("message", "Tie");
      console.log(scores);
    } else if (userChose === "rock" && computerChose === "paper") {
      scores.lose++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("lose", scores.lose);
      setInnerText("message", "Tie");
    } else if (userChose === "rock" && computerChose === "scissors") {
      scores.win++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("win", scores.win);
      setInnerText("message", "Tie");
    } else if (userChose === "paper" && computerChose === "rock") {
      scores.win++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("win", scores.win);
      setInnerText("message", "Tie");
    } else if (userChose === "paper" && computerChose === "paper") {
      scores.tie++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("tie", scores.tie);
      setInnerText("message", "Tie");
    } else if (userChose === "paper" && computerChose === "scissors") {
      scores.lose++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("lose", scores.lose);
      setInnerText("message", "Tie");
    } else if (userChose === "scissors" && computerChose === "rock") {
      scores.lose++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("lose", scores.lose);
      setInnerText("message", "Tie");
    } else if (userChose === "scissors" && computerChose === "paper") {
      scores.win++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("win", scores.win);
      setInnerText("message", "Tie");
    } else if (userChose === "scissors" && computerChose === "scissors") {
      scores.tie++;
      localStorage.setItem("scores", JSON.stringify(scores));
      setInnerText("tie", scores.tie);
      setInnerText("message", "Tie");
    }
  });
}

// reset game score
document.getElementById("reset-score").addEventListener("click", (e) => {
  localStorage.clear();
  scores = { win: 0, lose: 0, tie: 0 };
  setInnerText("win", scores.win);
  setInnerText("lose", scores.lose);
  setInnerText("tie", scores.tie);
});

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function setImage(id, img) {
  document.getElementById(id).src = img;
}
