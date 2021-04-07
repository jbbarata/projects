
function playSound(event) {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!sound) return; /* If not sound associated with with key press, then the function stops */
    
    sound.currentTime = 0; // this will rewind the sound
    
    sound.play();
    
    key.classList.add("play");
}

/* Remove animation */

function removeTransition(event) {
    if (event.propertyName !== "transform") return; //If doesn't has the transform property it shound skip
    this.classList.remove("play");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);