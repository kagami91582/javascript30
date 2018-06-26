const secHand = document.querySelector(`.second-hand`);
const minHand = document.querySelector(`.min-hand`);
const hrHand = document.querySelector(`.hour-hand`);

function setDate(){
    const time = new Date();

    const sec = time.getSeconds();
    const secDeg = ((sec/60)*360)+90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = time.getMinutes();
    const minDeg = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;


    const hr = time.getHours();
    const hrDeg = ((hr/12)*360)+90;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;

    console.log(hr+":"+min+":"+sec);
    secHand.style.background = `red`;
    secHand.style.height = `3px`;
    hrHand.style.width = `50%`;
}

setInterval(setDate,1000);