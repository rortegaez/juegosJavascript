var canvas=document.getElementById('miTablero');
var ctx=canvas.getContext("2d");
console.log(ctx);


ctx.beginPath();
ctx.fillRect(20,40,50,50);
ctx.fillStyle='#ff0000';
ctx.fill();
ctx.closePath();
/*
ctx.beginPath();
ctx.arc(240,160,20.0,Math.PI*2,false);
ctx.fillStyle='green';
ctx.fill();
ctx.closePath();*/