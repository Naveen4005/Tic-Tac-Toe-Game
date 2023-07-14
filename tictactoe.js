let arr = [[0, 0, 0],
           [0, 0, 0],
           [0, 0, 0]];
let turn = "X";
function check(){
    if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1 ||
        arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1 ||
        arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1 ||
        arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1 ||
        arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1 ||
        arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1 ||
        arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1 ||
        arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1){
            alert("Player 'X' won")
        }
        else if (arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2 ||
            arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2 ||
            arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2 ||
            arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2 ||
            arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2 ||
            arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2 ||
            arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2 ||
            arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2){
                alert("Player 'O' won")
            }
}
function onClickB1(){
    if (turn == "X" && arr[0][0] == 0){
        turn = "O";
        document.getElementById('b1').innerText = "X";
        arr[0][0] = 1;
    }
    else if(turn == "O" && arr[0][0] == 0){
        turn = "X";
        document.getElementById('b1').innerText = "O";
        arr[0][0] = 2;
    }
    check();
}
function onClickB2(){
    if (turn == "X" && arr[0][1] == 0){
        turn = "O";
        document.getElementById('b2').innerText = "X";
        arr[0][1] = 1;
    }
    else if(turn == "O" && arr[0][1] == 0){
        turn = "X";
        document.getElementById('b2').innerText = "O";
        arr[0][1] = 2;
    }
    check();
}
function onClickB3(){
    if (turn == "X" && arr[0][2] == 0){
        turn = "O";
        document.getElementById('b3').innerText = "X";
        arr[0][2] = 1;
    }
    else if(turn == "O" && arr[0][2] == 0){
        turn = "X";
        document.getElementById('b3').innerText = "O";
        arr[0][2] = 2;
    }
    check();
}
function onClickB4(){
    if (turn == "X" && arr[1][0] == 0){
        turn = "O";
        document.getElementById('b4').innerText = "X";
        arr[1][0] = 1;
    }
    else if(turn == "O" && arr[1][0] == 0){
        turn = "X";
        document.getElementById('b4').innerText = "O";
        arr[1][0] = 2;
    }
    check();
}
function onClickB5(){
    if (turn == "X" && arr[1][1] == 0){
        turn = "O";
        document.getElementById('b5').innerText = "X";
        arr[1][1] = 1;
    }
    else if(turn == "O" && arr[1][1] == 0){
        turn = "X";
        document.getElementById('b5').innerText = "O";
        arr[1][1] = 2;
    }
    check();
}
function onClickB6(){
    if (turn == "X" && arr[1][2] == 0){
        turn = "O";
        document.getElementById('b6').innerText = "X";
        arr[1][2] = 1;
    }
    else if(turn == "O" && arr[1][2] == 0){
        turn = "X";
        document.getElementById('b6').innerText = "O";
        arr[1][2] = 2;
    }
    check();
}
function onClickB7(){
    if (turn == "X" && arr[2][0] == 0){
        turn = "O";
        document.getElementById('b7').innerText = "X";
        arr[2][0] = 1;
    }
    else if(turn == "O" && arr[2][0] == 0){
        turn = "X";
        document.getElementById('b7').innerText = "O";
        arr[2][0] = 2;
    }
    check();
}
function onClickB8(){
    if (turn == "X" && arr[2][1] == 0){
        turn = "O";
        document.getElementById('b8').innerText = "X";
        arr[2][1] = 1;
    }
    else if(turn == "O" && arr[2][1] == 0){
        turn = "X";
        document.getElementById('b8').innerText = "O";
        arr[2][1] = 2;
    }
    check();
}
function onClickB9(){
    if (turn == "X" && arr[2][2] == 0){
        turn = "O";
        document.getElementById('b9').innerText = "X";
        arr[2][2] = 1;
    }
    else if(turn == "O" && arr[2][2] == 0){
        turn = "X";
        document.getElementById('b9').innerText = "O";
        arr[2][2] = 2;
    }
    check();
}
function onClickReset(){
    document.getElementById('b1').innerText = ""
    document.getElementById('b2').innerText = ""
    document.getElementById('b3').innerText = ""
    document.getElementById('b4').innerText = ""
    document.getElementById('b5').innerText = ""
    document.getElementById('b6').innerText = ""
    document.getElementById('b7').innerText = ""
    document.getElementById('b8').innerText = ""
    document.getElementById('b9').innerText = ""
    arr = [[0, 0, 0],
           [0, 0, 0],
           [0, 0, 0]];
}