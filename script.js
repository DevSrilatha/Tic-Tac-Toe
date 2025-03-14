let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turn0=true;
 const Winpatterns=
 [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

 ];
 const resetgame=()=>{
    turn0=true;

    enableBoxes();
    msgContainer.classList.add("hide")


 }
 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
 boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    // console.log("box was clicked");
    if(turn0){
        box.innerText="O";
        turn0=false;}
        else{
            box.innerText="X";
            turn0=true;
        }
    box.disabled=true;
checkWinner();
    })
});
const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let patterns of Winpatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        let pos1val=boxes[patterns[0]].innerText
            let pos2val=boxes[patterns[1]].innerText
           let pos3val= boxes[patterns[2]].innerText
        if(pos1val!=""&&pos2val !=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                // console.log("Winner",pos1val);
                showWinner(pos1val);

            }
        }

    }
}
newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);


