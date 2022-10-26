// game's array
let userMove = [
  {
    title: "rock",
    image: "images/rock2.png",
  },
  {
    title: "paper",
    image: "images/paper2.png",
  },
  {
    title: "scissors",
    image: "images/scissors2.png",
  },
];

let pcMove = [
  {
    title: "rock",
    image: "images/rock1.png",
  },
  {
    title: "paper",
    image: "images/paper1.png",
  },
  {
    title: "scissors",
    image: "images/scissors1.png",
  },
];

const rockUser = document.querySelector(".rock-user");
const scissorsUser = document.querySelector(".scissors-user");
const paperUser = document.querySelector(".paper-user");
const userImage = document.querySelector(".user-image");
const pcImage = document.querySelector(".pc-image");
const scoreUser = document.querySelector(".score-user");
const scoreTies = document.querySelector(".score-ties");
const scorePc = document.querySelector(".score-pc");
const restartGame = document.querySelector(".restartButton");
const startBanner = document.querySelector(".start-images");
const startButton = document.querySelector(".start-game");
const rounds = document.querySelector(".round-result");
const sound = document.querySelector(".audio");
const muteMusic = document.querySelector(".mute-music");
const arrowMute = document.querySelector(".arrow");
const mute = document.querySelector("#mute");

let userTitle = "";
let counterUser = 0;
let counterPc = 0;
let counterTies = 0;
let counterRound = 0;
let isMute = false;

function timePcMove() {
  setTimeout(function () {
    let randomImagePc = Math.floor(Math.random() * pcMove.length);
    //to cycle through the array of object, so it can pick any image from it.

    let randomTitle = pcMove[randomImagePc].title;
    pcImage.setAttribute("src", pcMove[randomImagePc].image);
    counterRound++;
    //to cycle through the array of object, so it can pick any title from it.

    // game implementation

    function scoreUpdateHandler() {
      scoreTies.innerHTML = counterTies;
      scorePc.innerHTML = counterPc;
      scoreUser.innerHTML = counterUser;
      rounds.innerHTML = counterRound;
    }

    if (userTitle === randomTitle) {
      counterTies++;
      scoreUpdateHandler();
    }

    if (
      (userTitle === "rock" && randomTitle === "scissors") ||
      (userTitle === "paper" && randomTitle === "rock") ||
      (userTitle === "scissors" && randomTitle === "paper")
    ) {
      counterUser++;
      scoreUpdateHandler();
    }

    if (
      (userTitle === "rock" && randomTitle === "paper") ||
      (userTitle === "paper" && randomTitle === "scissors") ||
      (userTitle === "scissors" && randomTitle === "rock")
    ) {
      counterPc++;
      scoreUpdateHandler();
    }
  }, 300);
}

if (counterUser > counterPc) {
  scoreUser.style.color = "#00a10d";
  scorepc.style.color = "#ff0000";
} else if (counterUser < counterPc) {
  scorePc.style.color = "#00a10d";
  scoreUser.style.color = "#ff0000";
} else {
  scorePc.style.color = "#3381ff";
  scoreUser.style.color = "#3381ff";
}

rockUser.addEventListener("click", () => {
  userImage.setAttribute("src", userMove[0].image);
  userTitle = userMove[0].title;
  sound.play();
  timePcMove();
});
paperUser.addEventListener("click", () => {
  userImage.setAttribute("src", userMove[1].image);
  userTitle = userMove[1].title;
  sound.play();
  timePcMove();
});
scissorsUser.addEventListener("click", () => {
  userImage.setAttribute("src", userMove[2].image);
  userTitle = userMove[2].title;
  sound.play();
  timePcMove();
});

startButton.addEventListener("click", () => {
  startBanner.classList.add("play");
});

function muteMusicHandler() {
  muteMusic.classList.toggle("show-mute");
  arrowMute.classList.toggle("arrow-class");
}
function muteHandler() {
  if (!isMute) {
    mute.className = "fas fa-volume-mute";
    sound.muted = true;
    navigator.vibrate(200);
    isMute = true;
  } else {
    mute.className = "fas fa-volume-up";
    sound.muted = false;
    isMute = false;
  }
  muteMusic.classList.remove("show-mute");
  arrowMute.classList.remove("arrow-class");
}

arrowMute.addEventListener("click", muteMusicHandler);
muteMusic.addEventListener("click", muteHandler);

restartGame.addEventListener("click", () => {
  window.addEventListener("click", () => {
    location.reload();
  });
});
