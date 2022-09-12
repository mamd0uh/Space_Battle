// Set up the enemy using (class)

class Enemy {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    this.isAlive = true;
  }

  // Enemy's method of attacking the Player

  attackPlayer(player) {
    if (Math.random() <= this.accuracy) {
      console.log("You have been hit!");
      player.hull = player.hull - this.firepower;
      if (player.hull <= 0) {
        player.isAlive = false;
        alert(player.name + " is dead");
        console.log(player.name + " is dead");
      }
    } else {
      alert(`${this.name} escaped`);
      console.log(`${this.name} escaped`);
    }
  }
}

// Set up the player class using (class)
class Player {
  constructor() {
    this.name = "USS HelloWorld";
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
    this.isAlive = true;
  }
  // Player's method of attacking the Enemy
  attackEnemy(enemy) {
    if (Math.random() <= this.accuracy) {
      alert("You hit the enemy!");
      console.log("You hit the enemy!");
      enemy.hull = enemy.hull - this.firepower;
      if (enemy.hull <= 0) {
        enemy.isAlive = false;
        alert(enemy.name + " is dead");
        console.log(enemy.name + " is dead");
      }
    } else {
      alert("You missed!");
      console.log("You missed!");
    }
  }
}

// initializing instance variables

let enemy1 = new Enemy("enemy1");
let enemy2 = new Enemy("enemy2");
let enemy3 = new Enemy("enemy3");
let enemy4 = new Enemy("enemy4");
let enemy5 = new Enemy("enemy5");
let enemy6 = new Enemy("enemy6");
let player1 = new Player();

//Building an Array for enemies
let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

//Declare variables
let mainPlayer;
let enemy;

updatePlayerStatus(player1); 

//The function was creating for the battle
function startBattle(player, enemies) {
  // Setting value of mainPlayer variable to player parameter
  mainPlayer = player;
  //While loop for the battle (checking if/while player is alive)
  while (player.isAlive) {
    enemy = enemies.find((enemy) => enemy.isAlive); // Searching array of enimies for enemies that still return true for "isAlive"
    if (!enemy) {
      // Checks if no enemies are return isAlive === true

      console.log("All enemies are DEAD! You WIN");
      alert("All enemies are DEAD! You WIN");

      break;
    }
    console.log(`You're battling ${enemy.name}`);
    alert(`You're battling ${enemy.name}`);
    player1.attackEnemy(enemy);

    if (enemy.isAlive) {
      //Check if/While nemy is living...
      enemy.attackPlayer(player); // Continue the attack on the player
      console.log(player1.hull)
      updatePlayerStatus(player1); 

    } else {
      // Declaring "retreat" variable and settings it's value to a prompt message
      let newEnemy = enemies.find((enemy) => enemy.isAlive); // Searching array of enimies for enemies that still return true for "isAlive"
      if (newEnemy) {
        let retreat = prompt(
          `${enemy.name} is dead, would you like to retreat? (Yes or No)`
        );

        if (retreat.toLowerCase() === "yes") {
          // Condition that sets when game is over if "yes" is entered into the promot. Otherwise, battle continues.
          console.log("GAME OVER!");
          alert("GAME OVER!");
          break; // Ends game
        }
      }
    }
  }
}

// 3 seconds delay before the battle starts.
setTimeout(() => {
  let startMessage = window.confirm("The game is about to start..");
  if (startMessage) {
    startBattle(player1, enemies);
  }
}, "3000");

function updatePlayerStatus (player) {
  const playerDiv = document.getElementById("playerStats")
  playerDiv.innerHTML = `
  Hull : ${player.hull}  <br>
  FirePower : ${player.firepower} <br>
  Accuracy : ${player.accuracy} <br>`
  
}
