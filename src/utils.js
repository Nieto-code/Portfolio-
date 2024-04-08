export function displayDialogue(text, onDisplayEnd){

    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    //Now appears
    dialogueUI.style.display = "block";

    //Scrolling logic
    let index = 0;
    let currentText = "";
    //Create a constant via setInterval method, which receives an
    //anonymous function which sets the currrentText to its next location in 5 ms
    let animationFrameId;

    function animateText() {
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            animationFrameId = requestAnimationFrame(animateText);
        } else {
            cancelAnimationFrame(animationFrameId);
        }
    }

    animationFrameId = requestAnimationFrame(animateText);

    //Button for closing
    const closeBtn = document.getElementById("close");

    //Closing button logic
    //Removes the dialogue html and UI, and removes the event from the button
    function onCloseBtnClick(){
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML= "";
        clearInterval(intervalRef)
        closeBtn.removeEventListener("click", onCloseBtnClick)
    }

    closeBtn.addEventListener("click",onCloseBtnClick);

}


export function setCamScale(k){

    const resizeFactor = k.width() / k.height();
    if(resizeFactor < 1){
        k.camScale(k.vec2(1));
        return;
    }
    
    k.camScale(k.vec2(1.5));
}