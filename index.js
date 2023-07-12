let turn = "X";
let cell = document.getElementsByClassName("cell");
let status = document.getElementById("statusText");
let Running = true;
let innerCell = [];




function cellClicked(id) {
    let element = document.getElementById(id);
    if (turn === "X" && element.innerHTML == "") {
        element.innerHTML = turn;
        turn = "O";
        status.innerHTML = `it is O turn`
    } else {
        element.innerHTML = "O";
        turn = "X"
        status.innerHTML = `it is X turn`
    }
    checkWinner();
}

function checkWinner() {
    for (let i = 0; i < cell.length; i++) {
     innerCell[i] = cell[i].innerHTML;
    }
    if (innerCell[0] == innerCell[1] && innerCell[1] == innerCell[2] && innerCell[0] !== "") {
    status.innerHTML = `winner is ${innerCell[0]}`
    AfterMatch();
    } else if (innerCell[3] == innerCell[4] && innerCell[4] == innerCell[5] && innerCell[5] !== "") {
    status.innerHTML = `winner is ${innerCell[3]}`
    AfterMatch()
} else if (innerCell[6] == innerCell[7] && innerCell[7] == innerCell[8] && innerCell[6] !== "") {
    status.innerHTML = `winner is ${innerCell[6]}`
    AfterMatch()
}  else if (innerCell[0] == innerCell[3] && innerCell[3] == innerCell[6] && innerCell[6] !== "") {
    status.innerHTML = `winner is ${innerCell[6]}`
    AfterMatch()
}  else if (innerCell[1] == innerCell[4] && innerCell[4] == innerCell[7] && innerCell[6] !== "") {
    status.innerHTML = `winner is ${innerCell[4]}`
    AfterMatch()
}  else if (innerCell[2] == innerCell[5] && innerCell[5] == innerCell[8] && innerCell[5] !== "") {
    status.innerHTML = `winner is ${innerCell[8]}`
    AfterMatch()
}  else if (innerCell[0] == innerCell[4] && innerCell[4] == innerCell[8] && innerCell[0] !== "") {
    status.innerHTML = `winner is ${innerCell[0]}`
    AfterMatch()
}  else if (innerCell[2] == innerCell[4] && innerCell[4] == innerCell[6] && innerCell[6] !== "") {
    status.innerHTML = `winner is ${innerCell[6]}`
    AfterMatch()
}

}

function AfterMatch() {
    setTimeout(() => {
        status.innerHTML = `Restarting in 2 sec`
    }, 1000)
    setTimeout(() => {
        restart()
    }, 2000)
}



function restart() {
    let restartBtn = document.getElementById("restartBtn");
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    status.innerHTML = `it is X turn`
    turn = "X";
};

