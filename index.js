// code your solution here


// const record = [
//     {year: "2023", result: "W"},
//     {year: "2024", result: "N/A"},
//     {year: "2025", result: "L"}
// ]

// function superbowlWin() {
//     ['year', 'result']
// }


function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");

    if (winningGame) {
        return winningGame.year;
    } else {
        return undefined;
    }
}