

let nameO = localStorage.getItem("nameO") || "Player O";
let nameX = localStorage.getItem("nameX") || "Player X";


let boxes=document.querySelectorAll(".box");
let rst=document.querySelector("#reset");
let newgame=document.querySelector("#new")
let result=document.querySelector(".result")
let note=document.querySelector("#note")
let oshot=true;
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] 
]
const resetgame=()=>{
    oshot=true
    
    //alert(`'${playerO}' first turn will be yours.` )
    enablegame()
    result.classList.add("hide")
    localStorage.removeItem('nameO');
    localStorage.removeItem('nameX');
   

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (oshot===true){
            box.innerText="O";
            oshot=false;
        }
        else{
            box.innerText="X";
            oshot=true;
        }
        box.disabled=true
        checkwin()
    })
})
const disablegame=()=>{
    for (let b of boxes){
        b.disabled=true
    }
}

const enablegame=()=>{
    for (let b of boxes){
        b.disabled=false
        b.innerText=""
    }
}

const winnerwho = (winner) => {
    if (winner==="O"){
        note.innerText=`Congratulations!! ${nameO}, you are the Winner`
        result.classList.remove("hide")
    }
    else{
        note.innerText=`Congratulations!! ${nameX}, you are the Winner`
        result.classList.remove("hide")       
    }
    disablegame();
}

const checkwin=()=>{
    for (let p of winpatt){

        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;

        if (p1 !="" && p2 !="" && p3 !="") {
            if (p1===p2 && p2===p3){
                console.log("Congratulations!!!")
                winnerwho(p1)

            }
        }

    }
}








newgame.addEventListener("click", resetgame);
rst.addEventListener("click", resetgame);
