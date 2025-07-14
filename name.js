let playerO= document.getElementsByClassName("name1")[0];
let playerX= document.getElementsByClassName("name2")[0];
let nameO = "";
let nameX = "";

playerO.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        nameO=playerO.value;
        console.log("done")
        
        
        playerO.style.caretColor = "transparent";
        //alert(`'${nameO}' first turn will be yours.` );
        playerX.focus();
        

    }
})

playerX.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        nameX=playerX.value;
        
        playerX.style.caretColor = "transparent" ;
        //alert(`'${nameX}' first turn will be yours.` );

    }
})

document.querySelector(".start").addEventListener("click", () => {

    if (nameO==="" || nameX==="") {
        alert("Please enter both player names");
        return;
    }

    localStorage.setItem("nameO", playerO.value.trim());
    localStorage.setItem("nameX", playerX.value.trim());

    window.location.href = "tictac.html";

});