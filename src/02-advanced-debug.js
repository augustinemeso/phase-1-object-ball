// gameFunctions.js

// Function to get the home team name
function homeTeamName() {
  let object = gameObject();
  return object.home.teamName;
}

// Function to get the away team name
function awayTeamName() {
  let object = gameObject();
  return object.away.teamName;
}

// Function to get the colors of the home team
function homeTeamColors() {
  let object = gameObject();
  return object.home.colors;
}

// Function to get the colors of the away team
function awayTeamColors() {
  let object = gameObject();
  return object.away.colors;
}

// Function to get the stats of a player by name
function playerStats(playerName) {
  let object = gameObject();
  // Check in both home and away teams
  if (object.home.players[playerName]) {
    return object.home.players[playerName];
  } else if (object.away.players[playerName]) {
    return object.away.players[playerName];
  } else {
    return "Player not found";
  }
}

// Example usage
console.log(homeTeamName()); // Logs "Brooklyn Nets"
console.log(awayTeamName()); // Logs "Charlotte Hornets"
console.log(homeTeamColors()); // Logs ["Black", "White"]
console.log(awayTeamColors()); // Logs ["Turquoise", "Purple"]
console.log(playerStats("Mason Plumlee")); // Logs Mason Plumlee's stats
console.log(playerStats("Ben Gordon")); // Logs Ben Gordon's stats

// Debugging with Chrome DevTools
let x = 99;
let y = 42;
debugger; // Chrome DevTools will pause the execution here
console.log("x:", x);
console.log("y:", y);
