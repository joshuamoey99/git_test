let click=true;

function populateBoard(size){
    let board = document.querySelector(".board");
    let squares=board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size*size;
    for (let i=0; i<amount; i++){
    let square=document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor="white";
    board.insertAdjacentElement("beforeend",square);
    }
}



function changeSize(input){
    if (input>2 && input<=100){
    populateBoard(input);
    }
    else{
        return true;
    }
}

function colorSquare(){
    if(click){
        if((color==="random")){
            this.style.backgroundColor=`hsl(${Math.random()*360},100%, 50%)`;
        }
        else{
        this.style.backgroundColor=color;
        }
    }
}

populateBoard(16);

function changeColor(choice){
    color=choice;
}

function resetBoard(){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll("div");
    squares.forEach((div)=>div.style.backgroundColor="white");
}

document.querySelector('body').addEventListener('click', (e)=>{
    if (e.target.tagName != "BUTTON"){
    click= !click;
    if(click){
        document.querySelector(".mode").textContent="Mode: Colouring";
    }
    else{
        document.querySelector(".mode").textContent="Mode: Not Colouring";
    }
    }
});

function canvasSize(input){
    let board = document.querySelector(".board");
    board.style.height=`${input}px`;
    board.style.width=`${input}px`;
    board.style.maxWidth="900px";
    board.style.maxHeight="600px";
}

