function startGame(){
    document.getElementById("start").style.display = "none";

    for(i = 0; i < 3; i ++){
        var userGuess = prompt("Rock = 1, Paper = 2, Scissors = 3\npick a number to play");
        var computerGuess = Math.floor(Math.random() * 3+1);

        //Random number test _ next line
        // alert(computerGuess)

            //If Users and Computer draws
            if (userGuess == computerGuess){
                alert("draw");   
            }

            //If User selects rock results
            else if (userGuess == "1") {
                if(computerGuess == "2"){
                    alert("Paper beats Rock \nYou Lose");  
                }
                if(computerGuess == "3"){
                    alert("Rock beats Scissors \nYou win");
                    i = 3; 
                }
            }    
        
            //If User selects paper results
            else if (userGuess== "2") {
                if(computerGuess == "1"){
                    alert("Paper beats Rock \nYou win");
                    i = 3;
                    
                }
                if(computerGuess == "3"){
                    alert("Scissors beats paper \nYou lose");
                }
            }    
        
            //If User selects Scissors results
            else if (userGuess== "3") {
                if(computerGuess == "1"){
                    alert("Rock beats Scissors \nYou lose");
                }  
                if(computerGuess == "2"){
                    alert("Scissors beats paper \nYou win");
                    i = 3;
                } 
            }
    }

}