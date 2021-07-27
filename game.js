// start
const battleScreen = document.querySelector('.battle-screen');
const chooseScreen = document.querySelector('.choose-screen');
const userPokemon1 = document.querySelector('.ball1');
const userPokemon2 = document.querySelector('.ball2');
const userPokemon3 = document.querySelector('.ball3');

// screens and menu items
const gameScreen = document.querySelector('.game-screen');
const endScreen = document.querySelector('.end-screen');
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

// pokemon divs
const charizardDiv = document.querySelector('.charizard');
const blastoiseDiv = document.querySelector('.blastoise');
const venusaurDiv = document.querySelector('.venusaur');

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


// creating object as a database for 
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
        power: 95,
        accuracy: 0.95
      },
      attack2:
      {
        attackname: 'Dragon Claw',
        type: 'dragon',
        power: 80,
        accuracy: 0.95
      },
      attack3:
      {
        attackname: 'Ember',
        type: 'fire',
        power: 75,
        accuracy: 0.85
      },
      attack4:
      {
        attackname: 'Tackle',
        type: 'normal',
        power: 70,
        accuracy: 0.75
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
        power: 90,
        accuracy: 0.95
      },
      attack2:
      {
        attackname: 'Crunch',
        type: 'normal',
        power: 80,
        accuracy: 0.95
      },
      attack3:
      {
        attackname: 'Ice Punch',
        type: 'ice',
        power: 75,
        accuracy: 0.85
      },
      attack4:
      {
        attackname: 'Flash',
        type: 'normal',
        power: 10,
        accuracy: 0.75
      }
    }
  },

  pokemon3 = {
    name: 'Venusaur',
    hp: 320,
    level: 100,
    type: 'grass',
    attacks: {

      attack1:
      {
        attackname: 'Blizzard',
        type: 'grass',
        power: 95,
        accuracy: 0.95
      },
      attack2:
      {
        attackname: 'Earthquake',
        type: 'poison',
        power: 80,
        accuracy: 0.95
      },
      attack3:
      {
        attackname: 'Body Slam',
        type: 'normal',
        power: 75,
        accuracy: 0.85
      },
      attack4:
      {
        attackname: 'Tackle',
        type: 'normal',
        power: 70,
        accuracy: 0.75
      }
    }
  },


  pokemon4 = {
    name: 'Pikachu',
    hp: 340,
    totalhp: 340,
    level: 100,
    type: 'electric',
    attacks: {

      attack1:
      {
        attackname: 'Thunder',
        type: 'electric',
        power: 95,
        accuracy: 0.95
      },
      attack2:
      {
        attackname: ' Mega Punch',
        type: 'normal',
        power: 80,
        accuracy: 0.95
      },
      attack3:
      {
        attackname: 'Nuzzle',
        type: 'electric',
        power: 75,
        accuracy: 0.85
      },
      attack4:
      {
        attackname: 'Quick Attack',
        type: 'normal',
        power: 70,
        accuracy: 0.75
      }
    }
  },

];

console.log(pokemon4.attacks.attack4.attackname);
console.log(pokemon3);

let player = {
  pokemon: pokemon1
};

// player.pokemon = pokemon3;

let foe = { pokemon: pokemon4 }

chooseScreen.style.display = 'block';
battleScreen.style.display = 'none';


function changeScreen() {
  chooseScreen.style.display = 'none';
  battleScreen.style.display = 'block';
  document.getElementById('balls').onclick = button;

}
console.log(foe.pokemon.attacks.attack3.attackname);


//player pokemon show

window.onload = function () {

  if (player.pokemon.name == "Charizard") {
    // console.log('yay');

    charizardDiv.classList.remove('hide');
    attackMenuChange();
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }

  if (player.pokemon.name == "Blastoise") {

    blastoiseDiv.classList.remove('hide');
    attackMenuChange();
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }

  if (player.pokemon.name == "Venusaur") {

    venusaurDiv.classList.remove('hide');
    attackMenuChange();
    updateHp();
    updateName();
    updateLevel();
  }
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

const playerProgress = document.getElementById('player-stats__bar');
const foeProgress = document.getElementById('opponent-stats__bar');


function playerProgressBar() {
  let percentage = player.pokemon.hp / player.pokemon.totalhp;
  playerProgress.style.width = ((350 * percentage) + "px");
}




attackButton1.addEventListener('click', function attack() {

  foe.pokemon.hp -= (player.pokemon.attacks.attack1.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  comment.innerHTML = player.pokemon.name + "<br>used <br>" + player.pokemon.attacks.attack1.attackname;
  let percentage = foe.pokemon.hp / foe.pokemon.totalhp;
  foeProgress.style.width = ((350 * percentage) + "px");

  if (foe.pokemon.hp < 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      player.pokemon.hp -= (foe.pokemon.attacks.attack1.power);
      playerHp.innerHTML = "HP: " + player.pokemon.hp;
      comment.innerHTML = "Pikachu used <br>" + foe.pokemon.attacks.attack1.attackname;

      playerProgressBar();
      if (player.pokemon.hp < 0) {
        foeWin();

      }
    }, 2000);
  }

});

attackButton2.addEventListener('click', function attack() {

  foe.pokemon.hp -= (player.pokemon.attacks.attack2.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  comment.innerHTML = player.pokemon.name + "<br>used <br>" + player.pokemon.attacks.attack2.attackname;
  let percentage = foe.pokemon.hp / foe.pokemon.totalhp;
  foeProgress.style.width = ((350 * percentage) + "px");

  if (foe.pokemon.hp < 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      player.pokemon.hp -= (foe.pokemon.attacks.attack3.power);
      playerHp.innerHTML = "HP: " + player.pokemon.hp;
      comment.innerHTML = "Pikachu used <br>" + foe.pokemon.attacks.attack3.attackname;

      playerProgressBar();
      if (player.pokemon.hp < 0) {
        foeWin();

      }
    }, 3000);
  }

});

attackButton3.addEventListener('click', function attack() {

  foe.pokemon.hp -= (player.pokemon.attacks.attack3.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  comment.innerHTML = player.pokemon.name + "<br>used <br>" + player.pokemon.attacks.attack3.attackname;
  let percentage = foe.pokemon.hp / foe.pokemon.totalhp;
  foeProgress.style.width = ((350 * percentage) + "px");


  if (foe.pokemon.hp < 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      player.pokemon.hp -= (foe.pokemon.attacks.attack4.power);
      playerHp.innerHTML = "HP: " + player.pokemon.hp;
      comment.innerHTML = "Pikachu used <br>" + foe.pokemon.attacks.attack4.attackname;

      playerProgressBar();
      if (player.pokemon.hp < 0) {
        foeWin();
      }
    }, 3000);
  }

});

attackButton4.addEventListener('click', function attack() {

  foe.pokemon.hp -= (player.pokemon.attacks.attack4.power);
  foeHp.innerHTML = "HP: " + foe.pokemon.hp;
  comment.innerHTML = player.pokemon.name + "<br>used <br>" + player.pokemon.attacks.attack4.attackname;
  let percentage = foe.pokemon.hp / foe.pokemon.totalhp;
  foeProgress.style.width = ((350 * percentage) + "px");

  if (foe.pokemon.hp < 0) {
    playerWin();
  }

  else {

    setTimeout(function () {
      player.pokemon.hp -= (foe.pokemon.attacks.attack2.power);
      playerHp.innerHTML = "HP: " + player.pokemon.hp;
      comment.innerHTML = "Pikachu used <br>" + foe.pokemon.attacks.attack2.attackname;

      playerProgressBar();
      if (player.pokemon.hp < 0) {
        foeWin();
      }
    }, 3000);
  }

});




// check winner


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










question.innerHTML = "What should <br>" + player.pokemon.name + " do?"

run.addEventListener('click', function () {
  endPage();
});

playAgain.addEventListener('click', function () {
  location.reload();
});

function endPage() {
  gameScreen.style.display = "none";
  endScreen.classList.remove('hide');
  endScreen.style.display = "block";
  endScreen.style.background = '#843118';
}



console.log(player.pokemon);


const endScreenMessage = document.querySelector('.end-screen__message');



fight.addEventListener('click', function () {
  menuArea.style.backgroundImage = 'url("images/menu_box_fight.jpg")';
  firstPage.innerHTML = "";
  question.style.display = 'none';
  menuList.style.display = 'none';
  secondPage.classList.remove('hide');
});

function winnerEndScreen() {
  gameScreen.style.display = 'none';
  endScreen.classList.remove('hide');
  endScreenMessage.innerHTML = 'You Won!'
  endScreen.style.background = '/images/pokemons.gif'
}


