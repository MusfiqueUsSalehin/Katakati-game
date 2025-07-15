let playerO= document.getElementsByClassName("name1")[0];
let playerX= document.getElementsByClassName("name2")[0];
let nameO = "";
let nameX = "";

playerO.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
       
        console.log("done")
        
        
        playerO.style.caretColor = "transparent";
        //alert(`'${nameO}' first turn will be yours.` );
        playerX.focus();
        

    }
})

playerX.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        
        
        playerX.style.caretColor = "transparent" ;
        //alert(`'${nameX}' first turn will be yours.` );
        

    }
})

document.querySelector(".start").addEventListener("click", () => {

    const nameO = playerO.value.trim();
    const nameX = playerX.value.trim();

    if (nameO==="" || nameX==="") {
        alert("Please enter both player names");
        return;
    }

    localStorage.setItem("nameO", nameO);
    localStorage.setItem("nameX", nameX);

    window.location.href = "tictac.html";

});