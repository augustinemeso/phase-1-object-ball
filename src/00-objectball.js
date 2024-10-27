function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Function to return the number of points scored by a player
function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
    return null; // Return null if player not found
}

// Function to return the shoe size of a player
function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return null; // Return null if player not found
}

// Function to return the colors of a team
function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null; // Return null if team not found
}

// Function to return an array of team names
function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Function to return the jersey numbers for a team
function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];
    for (let team in game) {
        if (game[team].teamName === teamName) {
            for (let player in game[team].players) {
                numbers.push(game[team].players[player].number);
            }
        }
    }
    return numbers;
}

// Function to return a player's stats
function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null; // Return null if player not found
}

// Function to return rebounds for the player with the largest shoe size
function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = '';

    for (let team in game) {
        for (let player in game[team].players) {
            let shoeSize = game[team].players[player].shoe;
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;
                playerWithLargestShoe = player;
            }
        }
    }

    return playerStats(playerWithLargestShoe).rebounds;
}

// Bonus Function to find the player with the most points
function mostPointsScored() {
    let game = gameObject();
    let highestPoints = 0;
    let playerWithMostPoints = '';

    for (let team in game) {
        for (let player in game[team].players) {
            let points = game[team].players[player].points;
            if (points > highestPoints) {
                highestPoints = points;
                playerWithMostPoints = player;
            }
        }
    }

    return playerWithMostPoints;
}

// Function to find which team has the most points
function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function to find the player with the longest name
function playerWithLongestName() {
    let game = gameObject();
    let longestName = '';

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

// Super Bonus Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
    let longestName = playerWithLongestName();
    let mostSteals = 0;

    for (let team in gameObject()) {
        for (let player in gameObject()[team].players) {
            if (player === longestName) {
                mostSteals = gameObject()[team].players[player].steals;
            }
        }
    }

    return mostSteals > 0; // Returns true if the player with the longest name has steals
}
