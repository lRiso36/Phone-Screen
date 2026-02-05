//when we type into the inputBox,
//we can press the arrow and it will send and
//appear on the phone screen
//sending will make the sencd sound
//get elements
const inputBox = document.getElementById("inputBox");

//buttons
const sendBtn = document.getElementById("sendBtn");

//message screen to append
const messageScreen = document.getElementById("messageScreen");

//get audio 
const sentAudio = document.getElementById("sentAudio");

//helper functions 
//send message function
//play audio and stop audio function
function messageSound() {
    try{
        sentAudio.currentTime = 0;
        sentAudio.play();
    } catch (err){
        console.warn(err);
    }
}

//send message function 
function sendMessage() {
    const userText = inputBox.value;
    //if no text content, return
    if(!userText){
        return;
    }

    //if is text content
    //create message box
    const userMessage = document.createElement("div");
    userMessage.classList.add("blue", "message");
    userMessage.textContent = userText;

    messageScreen.appendChild(userMessage);

    messageSound();
    //clear inputBox
    inputBox.value = "";

    //scroll to bottom
    messageScreen.scrollTop = messageScreen.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);