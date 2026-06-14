let num = Math.ceil(Math.random() * 100);
let msg = document.getElementById("message");
let attemptsMsg = document.getElementById("attempts");
let attempts = 0;
function checkBtn(){
    if(attempts >= 5){
        msg.textContent = "Game Over! The number was " + num;
        msg.style.color = "red";
        return;
    }
    let input = document.getElementById("userInput").value;
    attempts++; 
    attemptsMsg.textContent = `Attempts: ${attempts}`;
    if(input == num){
        msg.textContent = "Congratulations! You guessed the number.";
        msg.style.color = "green";
    } else if(input < num){
        msg.textContent = "Try again! The number is higher.";
        msg.style.color = "orange"; 
    } else if(input > num){  
        msg.textContent = "Try again! The number is lower.";
        msg.style.color = "blue";
    }else{
        msg.textContent = "Please enter a valid number.";
        msg.style.color = "red";
    }

}