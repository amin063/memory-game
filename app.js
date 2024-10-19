const data = [
  {
    id: 1,
    emoji: "😂",
    isSelect: false,
  },
  {
    id: 2,
    emoji: "😭",
    isSelect: false,
  },
  {
    id: 3,
    emoji: "🙀",
    isSelect: false,
  },
  {
    id: 4,
    emoji: "🍪",
    isSelect: false,
  },
  {
    id: 5,
    emoji: "🍎",
    isSelect: false,
  },
  {
    id: 6,
    emoji: "🧨",
    isSelect: false,
  },
  {
    id: 7,
    emoji: "🚗",
    isSelect: false,
  },
  {
    id: 8,
    emoji: "✨",
    isSelect: false,
  },
  {
    id: 9,
    emoji: "⚽",
    isSelect: false,
  },

  {
    id: 1,
    emoji: "😂",
    isSelect: false,
  },
  {
    id: 2,
    emoji: "😭",
    isSelect: false,
  },
  {
    id: 3,
    emoji: "🙀",
    isSelect: false,
  },
  {
    id: 4,
    emoji: "🍪",
    isSelect: false,
  },
  {
    id: 5,
    emoji: "🍎",
    isSelect: false,
  },
  {
    id: 6,
    emoji: "🧨",
    isSelect: false,
  },
  {
    id: 7,
    emoji: "🚗",
    isSelect: false,
  },
  {
    id: 8,
    emoji: "✨",
    isSelect: false,
  },
  {
    id: 9,
    emoji: "⚽",
    isSelect: false,
  },
];

const cardsBox = document.querySelector(".card-box");
const firstPlayer = document.querySelector(".player-1");
const secondPlayer = document.querySelector(".player-2");
const winTablo = document.querySelector(".win-tablo");

let isFirstPlayer = true;

function mixData(data) {
  for (let i = 0; i < data.length; i++) {
    const j = Math.floor(Math.random() * data.length);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}

function showCards() {
  mixData(data);
  cardsBox.innerHTML = ``;
  data.forEach((card, index) => {
    cardsBox.innerHTML += `        <div class="card" data-id = "${card.id}" data-index="${index}">
        <div class="front">${card.emoji}</div>
        <div class="back">❓</div>
      </div>`;
  });
}

let choosenCards = [];
console.log(choosenCards.length);

function rotateCard(index, cardId) {
  cardItems[index].classList.add("rotate-card");
  if (choosenCards.length == 0) {
    choosenCards.push(cardItems[index]);
  }
  if (choosenCards.length == 1) {
    if (choosenCards[0].getAttribute("data-index") != index) {
      choosenCards.push(cardItems[index]);
      console.log(choosenCards);
      checkCards(choosenCards);
      setTimeout(() => {
        cardItems.forEach((card) => card.classList.remove("rotate-card"));
        choosenCards = [];
      }, 1000);
    }
  }

  // if (choosenCards.length == 2) {

  // }
}

function checkCards(arr) {
  if (arr[0].getAttribute("data-id") == arr[1].getAttribute("data-id")) {
    arr[0].style.visibility = "hidden";
    arr[1].style.visibility = "hidden";
    showTurn();

    if (isFirstPlayer) {
      +firstPlayer.innerHTML++;
    } else {
      +secondPlayer.innerHTML++;
    }
  } else {
    isFirstPlayer = !isFirstPlayer;
    console.log("Sehvdi");
    showTurn();
  }

  if (+firstPlayer.innerHTML + +secondPlayer.innerHTML == 9) {
    winTablo.innerHTML = ``;
    if (+firstPlayer.innerHTML > +secondPlayer.innerHTML) {
      winTablo.innerHTML = `<p style = "color: #556fe5;">First Player Win!</p>`;
      winTablo.style.display = "block";
    } else {
      winTablo.innerHTML = `<p style = "color: #e55555;">Second Player Win!</p>`;
      winTablo.style.display = "block";
    }
  }
}

function showTurn() {
  if (isFirstPlayer) {
    firstPlayer.classList.add("p1-u");
    secondPlayer.classList.remove("p2-u");
  } else {
    secondPlayer.classList.add("p2-u");
    firstPlayer.classList.remove("p1-u");
  }
}

showCards();

showTurn();
const cardItems = document.querySelectorAll(".card");

cardItems.forEach((card) => {
  card.addEventListener("click", (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    const id = e.currentTarget.getAttribute("data-id");

    rotateCard(index, id);
  });
});
console.log(cardItems);
