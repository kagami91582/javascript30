const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#00A8E8'; 
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

// 顏色疊加
// ctx.globalCompositeOperation = 'multiply' ;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// 設定游標觸發條件

//
function draw(w){
    if(!isDrawing){return;}
    console.log(w);

    ctx.strokeStyle = ` hsl( ${hue}, 100%, 50%) `;
    ctx.beginPath();
    // 從這個位置
    ctx.moveTo(lastX,lastY);
    // 到這個位置
    ctx.lineTo(w.offsetX,w.offsetY);
    ctx.stroke();

    [lastX,lastY] = [w.offsetX,w.offsetY];
    hue++;
    if(hue >= 360){hue = 0;}
    if(ctx.lineWidth >= 30 || ctx.lineWidth <= 1){
        direction = !direction ;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousedown', (w) => {
    isDrawing = true;
    [lastX,lastY] = [w.offsetX,w.offsetY];
});

canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false );