let turnMusic = new Audio('ting.mp3');
let gameoverMusic = new Audio('gameover.mp3');
let gameover = false;
let draw = false;
let boxtexts = document.getElementsByClassName("boxtext");
let arr = Array.from(boxtexts);
let turn = 'X';
let count = 0;

function changeTurn() {
    if (turn === 'O') turn = 'X';
    else turn = 'O';
}
document.getElementById("text").innerText = "Turn of " + turn;

function checkWin() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    Array.from(wins).forEach(e => {
        if (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[0]].innerText != '') {
            document.getElementById("text").innerText = boxtexts[e[0]].innerText + ' Won!!!';
            gameover = true;
            gameoverMusic.play();
        }
    })
}

function checkDraw() {
    count = 0;

    for (i = 0; i < 9; i++) {
        if (arr[i].innerText === '')
            count++;
    }

    if (count === 0) {
        draw = true;
        document.getElementById("text").innerText = "Draw!!!";
        gameoverMusic.play();
    }
}

const btn = document.getElementsByClassName("btn");
btn[0].addEventListener('click', function reset() {
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'X';
    document.getElementById("text").innerText = "Turn of " + turn;
    gameover = false;
    draw = false;
})

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxtext = box.querySelector(".boxtext")
    box.addEventListener("click", function () {
        if (!gameover) {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                checkDraw();
                checkWin();
            }

            if (!gameover && !draw) {
                changeTurn();
                turnMusic.play();
                document.getElementById("text").innerText = "Turn of " + turn;
            }
        }
    }
    )
})

