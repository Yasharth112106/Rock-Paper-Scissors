const rockbtn=document.getElementById("rock");
const paperbtn=document.getElementById("paper");
const scissorbtn=document.getElementById("scissors");

let msg=document.getElementById("msg");
const arr=["Rock","Paper","Scissors"];

let myscoreBtn=document.getElementById("myScore");
let compscoreBtn=document.getElementById("compScore");
let myCount=0,compCount=0;

let mychoice,compchoice;

// function fun(choice){
//     mychoice=choice;

//     compchoice=arr[Math.floor(Math.random()*3)];
//     console.log(mychoice,compchoice);

//     let temp;

//     if(mychoice<compchoice && !(mychoice==0 && compchoice==2)){
//         temp=`You Lost. ${arr[compchoice]} beats ${arr[mychoice]}`;
//         msg.innerText=temp;
//         compCount++;
//         compscoreBtn.innerText=compCount;
//     }
//     else if(mychoice== compchoice){
//         temp=`It's a Draw`;
//         msg.innerText=temp;
//     }
//     else {
//         temp=`You won. ${arr[mychoice]} beats ${arr[compchoice]}`;
//         msg.innerText=temp;
//         myCount++;
//         myscoreBtn.innerText=myCount;
//     }
//     console.log("rock clicked")
// }


function generateCompChoice(){
    return arr[Math.floor(Math.random()*3)];
}

function checkDraw(mychoice,compchoice){
    if(mychoice=== compchoice) return true;
    else return false;
}

function checkWinner(mychoice,compchoice){
    let temp;
    if(mychoice=="Rock")
        isWinner= compchoice=="Scissors"? true:false;
    else if(mychoice =="Paper")
        isWinner= compchoice=="Rock"? true:false;
    else
        isWinner= compchoice=="Paper"? true:false;

    msg.classList.remove("green", "red"); // Remove both classes before adding the correct one

    if(isWinner) {
        myCount++;
        temp=`You win. Your ${mychoice} beats ${compchoice}.` 
        myscoreBtn.innerText=myCount;
        msg.classList.add("green");
        // msg.style.backgroundColor="green";
    }
    else {
        compCount++;
        temp=`You lost. ${compchoice} beats your ${mychoice}`;
        compscoreBtn.innerText=compCount;
        msg.classList.add("red");
        // msg.style.backgroundColor="red";

    }
    msg.innerText=temp;

}
// function showWinner(){
//     let temp;
//     if(checkDraw(mychoice,)) 
//      {   temp=`It's a Draw`; return; }
//     else{
//     }
//         msg.innerText=temp;
// }
function game(choice){
    mychoice=choice;
    compchoice=generateCompChoice();
    let isDraw=checkDraw(mychoice,compchoice);
    msg.classList.remove("green", "red");
    if(isDraw){   msg.innerText=`It's a Draw`; return; }
    
    checkWinner(mychoice,compchoice);
    // showWinner(isDraw,winner);
}

rockbtn.addEventListener("click", ()=>{ game('Rock'); })
paperbtn.addEventListener("click", ()=>{ game('Paper'); })
scissorbtn.addEventListener("click", ()=>{ game('Scissors'); })
