// sfx

let startMusic = new Audio();
let mainTheme = new Audio();
let playerVictory = new Audio();
let pokemonBattleMusic = new Audio();
let garyAppearance = new Audio();
let attack = new Audio();
let playerLoss = new Audio();

mainTheme.src = '/assets/sfx/main-theme.mp3'
playerVictory.src = '/assets/sfx/pokemonvictory.mp3'
pokemonBattleMusic.src = '/assets/sfx/pokemonbattle.mp3'
startMusic.src = '/assets/sfx/gameboy_start.mp3'
garyAppearance.src = '/assets/sfx/garyappearance.mp3'
attack.src = '/assets/sfx/attack.wav'
playerLoss.src = '/assets/sfx/over.mp3'

// screens

const startScreen = document.querySelector('.startScreen');
const gameScreen = document.querySelector('.gameScreen');
const battleScreen = document.querySelector('.battle-screen');
const chooseScreen = document.querySelector('.choose-screen');
const endScreen = document.querySelector('.end-screen');

// menu items 

const start = document.querySelector('.startButton');
const playAgain = document.querySelector('.play-again');
const menuArea = document.querySelector('.menu-area');
const attackList = document.querySelector('.attack-list');
const firstPage = document.getElementsByClassName('first-page');
const secondPage = document.getElementById('second-page');
const menuItems = document.querySelector('menu-items');
const question = document.querySelector('.question');
const run = document.querySelector('.run');
const fight = document.querySelector('.fight');
const menuList = document.getElementById('menu-items');
const box = document.querySelector('.box');
const endScreenMessage = document.querySelector('.end-screen__message');
const endScreenImage = document.querySelector('.end-screen__image');
let gary = document.getElementById('gary');
var boxText = document.getElementById("box-text");
const exclamation = document.getElementById('exclamation');
foeComment = document.getElementById('foe-comment');
foeCommentBox = document.getElementById('foe-comment-box');
foeComment.style.display = 'none';

// choose pokemon screen items

const userPokemon1 = document.querySelector('.ball1');
const userPokemon2 = document.querySelector('.ball2');
const userPokemon3 = document.querySelector('.ball3');

// pokemon divs

const charizardDiv = document.querySelector('.charizard');
const blastoiseDiv = document.querySelector('.blastoise');
const venusaurDiv = document.querySelector('.venusaur');
const pikachuDiv = document.querySelector('.pikachu');

// pokemon hps and levels

let playerHp = document.getElementById('playerhp');
let foeHp = document.querySelector('.foehp');
let comment = document.getElementById('comment');
const pokemonName = document.getElementById('player-name');
const pokemonLevel = document.getElementById('level');

// attack buttons for chosen pokemon

const attackButton1 = document.querySelector('.attack-button1');
const attackButton2 = document.querySelector('.attack-button2');
const attackButton3 = document.querySelector('.attack-button3');
const attackButton4 = document.querySelector('.attack-button4');

// progress bar

const playerProgress = document.getElementById('player-stats__bar');
const foeProgress = document.getElementById('opponent-stats__bar');

// creating object as a database for pokemon list

const pokemonDB = [
  pokemon1 = {
    name: 'Charizard',
    hp: 360,
    totalhp: 360,
    level: 100,
    type: 'fire',
    attacks: {
      attack1:
      {
        attackname: 'Flamethrower',
        type: 'fire',
        power: 95
      },
      attack2:
      {
        attackname: 'Dragon Claw',
        type: 'dragon',
        power: 80
      },
      attack3:
      {
        attackname: 'Ember',
        type: 'fire',
        power: 75
      },
      attack4:
      {
        attackname: 'Tackle',
        type: 'normal',
        power: 70
      }
    }
  },

  pokemon2 = {
    name: 'Blastoise',
    hp: 358,
    totalhp: 358,
    level: 100,
    type: 'water',
    attacks: {

      attack1:
      {
        attackname: 'Surf',
        type: 'water',
        power: 90
      },
      attack2:
      {
        attackname: 'Crunch',
        type: 'normal',
        power: 80
      },
      attack3:
      {
        attackname: 'Ice Punch',
        type: 'ice',
        power: 75
      },
      attack4:
      {
        attackname: 'Flash',
        type: 'normal',
        power: 10
      }
    }
  },

  pokemon3 = {
    name: 'Venusaur',
    hp: 320,
    totalhp: 320,
    level: 100,
    type: 'grass',
    attacks: {

      attack1:
      {
        attackname: 'Blizzard',
        type: 'grass',
        power: 95
      },
      attack2:
      {
        attackname: 'Earthquake',
        type: 'poison',
        power: 80
      },
      attack3:
      {
        attackname: 'Body Slam',
        type: 'normal',
        power: 75
      },
      attack4:
      {
        attackname: 'Tackle',
        type: 'normal',
        power: 70
      }
    }
  },


  pokemon4 = {
    name: 'Pikachu',
    hp: 340,
    totalhp: 340,
    level: 120,
    type: 'electric',
    attacks: [{
      attack: {
        attackname: 'Swift',
        type: 'normal',
        power: 70
      }
    }, {
      attack: {
        attackname: 'Thunderbolt',
        type: 'normal',
        power: 80
      }
    }, {
      attack: {
        attackname: 'Nuzzle',
        type: 'electric',
        power: 75
      }
    }, {
      attack: {
        attackname: 'Thunder',
        type: 'electric',
        power: 95
      }
    }]
  }
];

// initialization during first game load
let count = 0;

let player = {
  pokemon: pokemon1,
  talk: false,
  choose: false,
};

let foe = { pokemon: pokemon4 }


start.addEventListener('click', function () {
  startMusic.play();

  gameStart();
});


// tile map rendering

const TILE_WIDTH = 68;
const TILE_HEIGHT = 72;

const TIME_INTERVAL = 100;

var startTileMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 3, 3, 3, 3, 6, 8],
  [1, 1, 4, 4, 4, 4, 4, 7, 9],
  [2, 2, 2, 2, 2, 2, 2, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 2],
  [1, 1, 2, 2, 0, 2, 2, 2, 2],
  [1, 17, 16, 15, 2, 2, 2, 2, 2],
  [1, 12, 13, 14, 18, 19, 2, 10, 11],
  [1, 2, 2, 2, 2, 2, 1, 1, 1]
];

let gameWrapperEl = document.getElementById('gameScreen');

const FRAME_WIDTH = startTileMap[0].length * TILE_WIDTH;
const FRAME_HEIGHT = startTileMap.length * TILE_HEIGHT;

function Tile({
  width = TILE_WIDTH,
  height = TILE_HEIGHT,
  xIndex,
  yIndex,
  bgType
}) {
  this.width = width;
  this.height = height;
  this.backgroundType = bgType;
  this.xIndex = xIndex;
  this.yIndex = yIndex;

  this.getElement = function () {
    const el = document.createElement('div');

    el.className = `tile tile${this.backgroundType}`;
    el.style.top = `${this.yIndex * TILE_HEIGHT}px`;
    el.style.left = `${this.xIndex * TILE_WIDTH}px`;

    return el;
  }
}

function GamePlay() {

  this.init = function () {

    let player = document.getElementById('player');
    let playerPosition = {
      x: 476,
      y: 216
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prepare tiles
    for (let i = 0; i < startTileMap.length; i++) {
      for (let j = 0; j < startTileMap[i].length; j++) {
        let tileObj = new Tile({
          xIndex: j,
          yIndex: i,
          bgType: startTileMap[i][j]
        });
        const tileEl = tileObj.getElement();

        gameWrapperEl.appendChild(tileEl);
      }
    }

    function updatePlayerPosition(x, y) {
      playerPosition.x = x;
      playerPosition.y = y;

      player.style.top = `${playerPosition.y}px`;
      player.style.left = `${playerPosition.x}px`;
    }

    function handleKeyDown(e) {
      e.preventDefault();

      switch (e.which) {
        case 37:
          console.log('Key left pressed');
          move('left');
          break;
        case 38:
          console.log('Key up pressed');
          move('up');
          break;
        case 39:
          console.log('Key right pressed');
          move('right');
          break;
        case 40:
          console.log('Key down pressed');
          move('down');
          break;
        case 90:
          box.classList.remove('fadeIn');
          box.classList.add('fadeOut');
        default:
          break;

      }
    }

    function resetPlayerBg() {
      player.style.backgroundPositionX = '0px';
      player.style.backgroundPositionY = '0px';
    }

    function checkCollision(nextXIndex, nextYIndex) {
      let nextTileType = startTileMap[nextYIndex][nextXIndex];
      return nextTileType !== 0;
    }

    function move(direction) {
      let bgY = 0;

      let bgIndex = 0;
      let xIncrement = 0;
      let yIncrement = 0;
      let xInc = TILE_WIDTH / 4;
      let yInc = TILE_HEIGHT / 4;

      // Find current tile index of where the player is
      const playerTileIndexX = playerPosition.x / TILE_WIDTH;
      const playerTileIndexY = playerPosition.y / TILE_HEIGHT;

      console.log({
        playerTileIndexX,
        playerTileIndexY
      });

      if (direction == 'left') {

        box.classList.remove('fadeIn');
        box.classList.add('fadeOut');

        if (player.talk) {
          if (playerTileIndexX == 1 && playerTileIndexY == 4) {
            mainTheme.src = "";
            garyAppearance.play();
            setTimeout(function () {
              garyAppearance.src = "";
              pokemonBattleMusic.play();
            }, 2800);
            exclamation.classList.remove('hide');
            pokemonBattle();
          }
        }

        const isCollisionAhead = checkCollision(playerTileIndexX - 1, playerTileIndexY);

        if (isCollisionAhead) {
          return;
        }

        bgY = 3 * TILE_HEIGHT;
        xInc = -xInc;
        yInc = 0;
      }

      if (direction == 'right') {


        box.classList.remove('fadeIn');
        box.classList.add('fadeOut');

        const isCollisionAhead = checkCollision(playerTileIndexX + 1, playerTileIndexY);

        if (isCollisionAhead) {
          return;
        }

        bgY = 2 * TILE_HEIGHT;
        yInc = 0;
      }

      if (direction == 'up') {


        box.classList.remove('fadeIn');
        box.classList.add('fadeOut');

        const isCollisionAhead = checkCollision(playerTileIndexX, playerTileIndexY - 1);

        if (isCollisionAhead) {
          return;
        }

        bgY = 1 * TILE_HEIGHT;
        xInc = 0;
        yInc = -yInc;
      }

      if (direction == 'down') {
        const isCollisionAhead = checkCollision(playerTileIndexX, playerTileIndexY + 1);

        //oak placement
        if (playerTileIndexX == 4 && playerTileIndexY == 5) {

          resetPlayerBg();
          box.classList.remove('fadeOut');
          box.classList.add('fadeIn');

          if (count == 0) {
            boxText.innerHTML = "";
            boxText.innerHTML = "Hi, Ash! You can choose your first pokemon right away!"
          }
          else {
            choosePokemonText();
          }


          setTimeout(function () {
            chooseScreen.classList.remove('hide');
            if (chooseScreen.classList == 'hide') {
              gameScreen.classList.add('hide');

            }
          }, 2000)
          gameScreen.classList.remove('hide');
          player.talk = true;
          count += 1;
          console.log('count us ' + count);

        }

        if (isCollisionAhead) {
          return;
        }

        bgY = 0;
        xInc = 0;
      }

      player.style.backgroundPositionY = `${bgY}px`;

      let ti = setInterval(function () {
        let nextXPosition = playerPosition.x + xInc;
        let nextYPosition = playerPosition.y + yInc;

        if (
          (nextXPosition + TILE_WIDTH > FRAME_WIDTH) ||
          (nextYPosition + TILE_HEIGHT > FRAME_HEIGHT) ||
          (nextXPosition < 0) ||
          (nextYPosition < 0) ||
          xIncrement >= TILE_WIDTH || yIncrement >= TILE_HEIGHT
        ) {
          xIncrement = 0;
          yIncrement = 0;
          nextXPosition = playerPosition.x;
          nextYPosition = playerPosition.y;

          clearInterval(ti);
          // resetPlayerBg();

          return;
        }

        if (bgIndex >= 4) {
          bgIndex = 0;
        }

        updatePlayerPosition(nextXPosition, nextYPosition);
        player.style.backgroundPositionX = `${TILE_WIDTH * bgIndex}px`;
        bgIndex++;
        xIncrement += Math.abs(xInc);
        yIncrement += Math.abs(yInc);
      }, TIME_INTERVAL);
    }
  };

}

function choosePokemonText() {
  boxText.innerHTML = "";
  boxText.innerHTML = "Great choice! You picked " + player.pokemon.name + "! It's a " + player.pokemon.type + " type pokemon. You can get going now :)"
  gameScreen.classList.remove('hide');
}

function changeScreen(ballIndex) {
  chooseScreen.style.display = 'none';
  gameScreen.classList.remove('fadeOut');
  gameScreen.classList.add('fadeIn');

  if (ballIndex == 1) {
    player.pokemon = pokemon1;
    player.choose = true;
    gary.style.display = 'block';
    startMusic.play();
    choosePokemonText();
  }
  if (ballIndex == 2) {
    player.pokemon = pokemon2;
    player.choose = true;
    gary.style.display = 'block';
    startMusic.play();
    choosePokemonText();
  }
  if (ballIndex == 3) {
    player.pokemon = pokemon3;
    player.choose = true;
    gary.style.display = 'block';
    startMusic.play();
    choosePokemonText();
  }
  renderPokemon();
}

function renderPokemon() {

  if (player.pokemon.name == "Charizard") {
    console.log('yay');

    charizardDiv.classList.remove('hide');

    changeName();
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }

  if (player.pokemon.name == "Blastoise") {

    blastoiseDiv.classList.remove('hide');

    changeName();
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }

  if (player.pokemon.name == "Venusaur") {

    venusaurDiv.classList.remove('hide');

    changeName();
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }
}

function changeName() {
  question.innerHTML = "";
  question.innerHTML = "What should " + player.pokemon.name + " do?"
}

function attackMenuChange() {
  attackButton1.innerHTML = player.pokemon.attacks.attack1.attackname;
  attackButton2.innerHTML = player.pokemon.attacks.attack2.attackname;
  attackButton3.innerHTML = player.pokemon.attacks.attack3.attackname;
  attackButton4.innerHTML = player.pokemon.attacks.attack4.attackname;
}


function updateHp() {
  playerHp.innerHTML = "HP: " + player.pokemon.hp;
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
}

function updateName() {
  pokemonName.innerHTML = player.pokemon.name;
}

function updateLevel() {
  pokemonLevel.innerHTML = "LVL: " + player.pokemon.level;
}

// handle attacks + hp updates

fight.addEventListener('click', function () {
  menuArea.style.backgroundImage = "url('pokemon/assets/images/menu_box_fight.jpg')";
  firstPage.innerHTML = "";
  question.style.display = 'none';
  menuList.style.display = 'none';
  secondPage.classList.remove('hide');
  secondPage.style.display = 'flex';
});

function playerProgressBar() {
  let percentage = player.pokemon.hp / player.pokemon.totalhp;
  if (percentage <= 0.8) {
    playerProgress.style.backgroundColor = "#E2C01C";
    if (percentage <= 0.4) {
      playerProgress.style.backgroundColor = 'red';
    }
  }
  playerProgress.style.width = ((350 * percentage) + "px");
}

function foeProgressBar() {
  let percentage = foe.pokemon.hp / foe.pokemon.totalhp;
  if (percentage <= 0.8) {
    foeProgress.style.backgroundColor = "#E2C01C";
    if (percentage <= 0.4) {
      foeProgress.style.backgroundColor = 'red';
    }
  }
  foeProgress.style.width = ((350 * percentage) + "px");
}

function foeAttack() {

  let random = Math.floor((Math.random() * 4));
  player.pokemon.hp -= (foe.pokemon.attacks[random].attack.power);

  playerHp.innerHTML = "HP: " + player.pokemon.hp;

  foeComment.style.display = 'block';
  foeCommentBox.innerHTML = "";
  foeCommentBox.innerHTML = "It's foe Pikachu's turn. Pikachu <br> used " + foe.pokemon.attacks[random].attack.attackname + ".";

  attack.play();

  pikachuDiv.style.top = 190 + "px";
  pikachuDiv.style.left = 130 + "px";
  setTimeout(function () {
    pikachuDiv.style.top = 132 + "px";
    pikachuDiv.style.left = 424 + "px";
  }, 500)

  setTimeout(function () {
    foeComment.style.display = 'none';
  }, 2500)
}

function moveAnimate() {
  if (player.pokemon.name == 'Charizard') {
    charizardDiv.style.top = 132 + "px";
    charizardDiv.style.left = 275 + "px";
    setTimeout(function () {
      charizardDiv.style.top = 250 + "px";
      charizardDiv.style.left = 20 + "px";
    }, 400)
  }

  if (player.pokemon.name == 'Blastoise') {
    blastoiseDiv.style.top = 200 + "px";
    blastoiseDiv.style.left = 325 + "px";
    setTimeout(function () {
      blastoiseDiv.style.top = 330 + "px";
      blastoiseDiv.style.left = 90 + "px";
    }, 400)
  }

  if (player.pokemon.name == 'Venusaur') {
    venusaurDiv.style.top = 200 + "px";
    venusaurDiv.style.left = 375 + "px";
    setTimeout(function () {
      venusaurDiv.style.top = 370 + "px";
      venusaurDiv.style.left = 100 + "px";
    }, 400)
  }

}

function attackMusic() {
  attack.play();
}

attackButton1.addEventListener('click', function attack() {

  attackMusic();

  foe.pokemon.hp -= (player.pokemon.attacks.attack1.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  foeComment.style.display = 'block';
  foeCommentBox.innerHTML = player.pokemon.name + " used " + player.pokemon.attacks.attack1.attackname + ".";

  foeProgressBar();

  if (foe.pokemon.hp <= 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      foeAttack();
      playerProgressBar();
      if (player.pokemon.hp <= 0) {
        foeWin();

      }
    }, 3000);
  }

});


attackButton2.addEventListener('click', function attack() {

  attackMusic();

  foe.pokemon.hp -= (player.pokemon.attacks.attack2.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  foeComment.style.display = 'block';
  foeCommentBox.innerHTML = player.pokemon.name + " used " + player.pokemon.attacks.attack2.attackname + ".";

  foeProgressBar();

  if (foe.pokemon.hp <= 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      foeAttack();
      playerProgressBar();
      if (player.pokemon.hp <= 0) {
        foeWin();

      }
    }, 3000);
  }

});

attackButton3.addEventListener('click', function attack() {

  attackMusic();

  foe.pokemon.hp -= (player.pokemon.attacks.attack3.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  foeComment.style.display = 'block';
  foeCommentBox.innerHTML = player.pokemon.name + " used " + player.pokemon.attacks.attack3.attackname + ".";


  foeProgressBar();

  if (foe.pokemon.hp <= 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      foeAttack();
      playerProgressBar();
      if (player.pokemon.hp <= 0) {
        foeWin();

      }
    }, 3000);
  }

});

attackButton4.addEventListener('click', function attack() {

  attackMusic();

  foe.pokemon.hp -= (player.pokemon.attacks.attack4.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  foeComment.style.display = 'block';
  foeCommentBox.innerHTML = player.pokemon.name + " used " + player.pokemon.attacks.attack4.attackname + ".";

  foeProgressBar();

  if (foe.pokemon.hp <= 0) {
    playerWin();
  }
  else {
    setTimeout(function () {
      foeAttack();
      playerProgressBar();
      if (player.pokemon.hp <= 0) {
        foeWin();
      }
    }, 3000);
  }
});


function foeWin() {
  player.pokemon.hp = 0;
  updateHp();
  comment.innerHTML = "Pikachu won"
  endPage();
};

function playerWin() {
  foe.pokemon.hp = 0;
  updateHp();
  comment.innerHTML = "You Won!"
  winnerEndScreen();
}


run.addEventListener('click', function () {
  endPage();
});


playAgain.addEventListener('click', function () {
  location.reload();
});

function endPage() {

  pokemonBattleMusic.src = "";
  playerLoss.play();
  battleScreen.style.display = "none";
  endScreen.classList.remove('hide');
  endScreen.style.display = "block";
  endScreen.style.background = '#843118';
}

function winnerEndScreen() {
  pokemonBattleMusic.src = "";
  playerVictory.play();
  battleScreen.style.display = 'none';
  endScreen.classList.remove('hide');
  endScreenMessage.innerHTML = 'You Won!'
}

function pokemonBattle() {
  console.log('screen will come');

  box.classList.remove('fadeOut');
  boxText.innerHTML = "";
  boxText.innerHTML = "What's the hurry, Ash? Let's put on a battle to see who's got the stronger pokemon!"

  let loadingScreen = document.getElementById('loadingScreen');

  setTimeout(function () {
    loadingScreen.classList.remove('fadeOut');
    loadingScreen.classList.add('fadeIn');
    gameScreen.classList.remove('fadeIn');
  }, 3000)

  setTimeout(function () {
    loadingScreen.classList.add('fadeOut');
    gameScreen.classList.add('fadeOut');
    battleScreen.classList.remove('hide');
  }, 4000)

  renderPokemon();
}

function gameStart() {

  setTimeout(function () {
    mainTheme.play();
  }, 1000)

  let loadingScreen = document.getElementById('loadingScreen');


  startScreen.classList.add('fadeOut');
  gameScreen.classList.add('fadeOut');

  // gameScreen.innerHTML = "";

  setTimeout(function () {
    loadingScreen.classList.add('fadeIn');



    loadingScreen.classList.remove('fadeIn');
    loadingScreen.classList.add('fadeOut');



  }, 1000)


  gameScreen.classList.remove('fadeOut');
  gameScreen.classList.add('fadeIn');

  setTimeout(function () {
    box.classList.remove('fadeOut');
    box.classList.add('fadeIn');
  }, 2000);
  box.classList.remove('fadeIn');


};

let gamePlay = new GamePlay();

gamePlay.init();