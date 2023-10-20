let userWins = 0;
let aiWins = 0;

alert("Rock, Paper, Scissors!\nTry to get 10 wins before the ai does!");


while (aiWins != 10 && userWins != 10) {

    var userInput = prompt("choose 'r' for rock, 'p' for paper or 's' for scissors.");

    if (userInput == "r" || userInput == "p" || userInput == "s") {
        
        let aiInput = 0;
        
        const generateAIInput = () => {
            //generates random number 1 to 3
            const getRandomInt = () => {
                //returns 1 * maxN
                return Math.floor(Math.random() * 3);
                }


            aiInput = getRandomInt(); 


            switch(aiInput) {
                case 0:
                    aiInput = "r"
                    break;
                case 1:
                    aiInput = "p"
                    break;
                case 2:
                    aiInput = "s"
                    break;
                default:
                    console.log("error, ai input is not r, p or s.");
            }

        }

        generateAIInput();
        
        

        if (userInput == "r" || userInput == "p" || userInput == "s") {
            console.log("ok! lets see who won....");
            
        } else {
            console.log("error, invalid input, please try again.");

            }

        
        let userInputFull = userInput;
        let aiInputFull = aiInput;

        switch(userInputFull) {
            case "r":
                userInputFull = "rock"
                break;
            case "p":
                userInputFull = "paper"
                break;
            case "s":
                userInputFull = "scissors"
                break;
        }

        switch(aiInputFull) {
            case "r":
                aiInputFull = "rock"
                break;
            case "p":
                aiInputFull = "paper"
                break;
            case "s":
                aiInputFull = "scissors"
                break;
        }

        console.log(`user picks ${userInputFull}!\nAI picks ${aiInputFull}!`);
        alert(`user picks ${userInputFull}!\nAI picks ${aiInputFull}!`);


        switch(userInput, aiInput) {
            case "r", "r":
                console.log("draw");
                break;
            case "r", "p":
                console.log("ai wins");
                aiWins++
                break;
            case "r", "s":
                console.log("user wins");
                userWins++
                break;
            
            case "p", "r":
                console.log("user wins");
                userWins++
                break;
            case "p", "p":
                console.log("draw");
                break;
            case "p", "s":
                console.log("ai wins");
                aiWins++
                break;

            case "s", "r":
                console.log("ai wins");
                aiWins++
                break;
            case "s", "p":
                console.log("user wins");
                userWins++
                break;
            case "s", "s":
                console.log("draw");
                break;

        }

    } else {
        alert("invalid input, please try again");
    }

}

if (userWins == 10) {

    alert(`you got 10 wins! gg!`);
} else if (aiWins == 10) {

    alert(`Ai beat you to 10 wins this time...try again!`);
}
