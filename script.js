const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset-btn");
const newGame=document.querySelector(".new-btn");
const msg=document.querySelector(".msg")
const msgContainer=document.querySelector(".msg-container");
const gameBoard=document.querySelector(".board");
let turnX = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turnX ) {
            cell.innerHTML = "X";
            turnX = false;
        } else if (!turnX ) {
            cell.innerHTML = "O";
            turnX = true;
        }
        cell.disabled=true;
        checkWinner();
    });
});
function checkWinner(){
    for( let pattern of winPatterns)
    {
        let pos1val=cells[pattern[0]].innerText;
        let pos2val=cells[pattern[1]].innerText;
        let pos3val=cells[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(,cells[pattern[1]].innerText,cells[pattern[2]].innerText);
        
    }
};
function showWinner(winner){
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBtns();
}
function disableBtns(){
    cells.forEach(cell=>{
        cell.disabled=true;
        cell.classList.add("end-game");
    })
    // gameBoard.classList.add("end-game");
}
function resetAll()
{
    msgContainer.classList.add("hide");
    turnX=true;
    cells.forEach(cell=>{
        cell.disabled=false;
        cell.classList.remove("end-game");
        cell.innerText="";
    })
}
reset.addEventListener("click",resetAll);
newGame.addEventListener("click",resetAll);

