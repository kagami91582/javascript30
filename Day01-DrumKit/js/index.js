



function removeTransition(input){
    if(input.propertyName !== 'transform'){return;}
    input.target.classList.remove('playing');
}

function playSound(keyin){
    const audio = document.querySelector(`audio[data-key="${keyin.keyCode}"]`);
    const button = document.querySelector(`.button[data-key="${keyin.keyCode}"]`);
    if(!audio){return;}
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('transitionend',removeTransition));
window.addEventListener("keydown", playSound);
