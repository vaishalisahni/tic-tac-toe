const firstScreen=document.querySelector(".first-screen");
const computer=document.querySelector(".computer");
const twoPlayers=document.querySelector(".two-players");
const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset-btn");
const newGame=document.querySelector(".new-btn");
const msg=document.querySelector(".msg")
const msgContainer=document.querySelector(".msg-container");
const mainContainer=document.querySelector(".main-container");

let haswinner=false;
let cnt=0;
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
twoPlayers.addEventListener("click",()=>{
    firstScreen.classList.add("hide");
    haswinner=false;
    turnX=true;
    cnt=0;
    mainContainer.classList.remove("hide");
    cells.forEach((cell) => {
        
        cell.addEventListener("click", handleCellClick);
    });
})
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
                // console.log("winner", pos1val);
                showWinner(pos1val);
                haswinner=true;
                break;
            }
        }
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(,cells[pattern[1]].innerText,cells[pattern[2]].innerText);
        
    }
};
function showWinner(winner){
    if(winner==="draw"){
        msg.innerText="It's a Draw!"
    }
    else
    msg.innerText=`Congratulations! Winner is ${winner}.`
    msgContainer.classList.remove("hide");
    mainContainer.classList.add("hide");
    cnt=0;
    turnX=true;
    // disableBtns();
}
// function disableBtns(){
//     cells.forEach(cell=>{
//         cell.disabled=true;
//         cell.classList.add("end-game");
//     })
//     // gameBoard.classList.add("end-game");
// }
function resetGame()
{
    mainContainer.classList.remove("hide");
    msgContainer.classList.add("hide");
    turnX=true;
    cells.forEach(cell=>{
        cell.disabled=false;
        cell.innerText="";
    });
    cnt=0;
    haswinner=false;
    // cells.forEach(cell => {
    //     cell.removeEventListener("click", handleCellClick);  // Remove old listeners
    //     cell.addEventListener("click", handleCellClick);     // Add new listener
    // });
}
function restartGame(){
    firstScreen.classList.remove("hide");
    msgContainer.classList.add("hide");
    mainContainer.classList.add("hide");
    turnX=true;
    cells.forEach(cell=>{
        cell.disabled=false;
        cell.innerText="";
    })
    cnt=0;
    haswinner=false;
    // cells.forEach(cell => {
    //     cell.removeEventListener("click", handleCellClick);  // Remove old listeners
    //     cell.addEventListener("click", handleCellClick);     // Add new listener
    // });

}
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",restartGame);

function handleCellClick(e){
    const cell=e.target;
    if (cell.innerText !== "") return;

            cnt++;
            if (turnX ) {
                cell.innerHTML = "X";
                turnX = false;
            } else if (!turnX ) {
                cell.innerHTML = "O";
                turnX = true;
            }
            cell.disabled=true;
            checkWinner();
            if(cnt===9 && !haswinner){
                showWinner("draw");
                haswinner=false;
                cnt=0;
            }
}