let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let homePoints = 0
let awayPoints = 0

function incHomeOne() {
    homePoints++
    homeScore.textContent = homePoints
}

function incHomeTwo() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function incHomeThree() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function incAwayOne() {
    awayPoints++
    awayScore.textContent = awayPoints
}

function incAwayTwo() {
    awayPoints += 2
    awayScore.textContent = awayPoints
}

function incAwayThree() {
    awayPoints += 3
    awayScore.textContent = awayPoints
}