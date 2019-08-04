let gamearea = document.getElementById("gamearea");
let platform = document.getElementById("platform");
let ball = document.getElementById("ball");
let y = 0;
let x = 0;
let leftRight=topBottom = true;
gamearea.addEventListener("mousemove", function(event)
{
	if(event.offsetX < gamearea.offsetWidth - platform.offsetWidth/2 - 70) 
	platform.style.left = (event.offsetX - platform.offsetWidth/2 + 70) + "px";
});



function ballTop()
{
if (y >= (gamearea.clientHeight-ball.clientWidth-20) && (x>parseInt(platform.style.left)-ball.clientWidth) && x<parseInt(platform.style.left)+platform.clientWidth) topBottom=false;
if(y>=gamearea.clientHeight-ball.clientWidth) {clearInterval(intervalTop); clearInterval(timerVar); alert("Game Over")};	
if(y<=0) topBottom=true;
if(topBottom) y++;
if(!topBottom) y--;
ball.style.top=y+"px";


if (x>gamearea.clientWidth-ball.clientWidth) leftRight=false;	
if(x<=0) leftRight=true;
if(leftRight) x++;
if(!leftRight) x--;
ball.style.left=x+"px";
}
let intervalTop = setInterval(ballTop, 1);	
	let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   let hour = Math.floor(totalSeconds /3600);
   let minute = Math.floor((totalSeconds - hour*3600)/60);
   let seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = minute + ":" + seconds;
}


let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let i = 0;
let d = 0;
let s = 0;

red.onwheel = function(event){
	
	let delta = event.deltaY || event.detail || event.wheelDelta;
	if(delta > 0) i+=2;
	else i-=2;
	if(i < 0 ) i == 0;
	if(i > 256) i == 255;
	if(i > 0 && i < 256)
	{red.innerHTML = i;}
	red.style.background = 'rgb(' + i + ',0,0)';
	mix.style.background = 'rgb('+ i + ',' + d + ',' + s + ')';
}



green.onwheel = function(event){

	let delta = event.deltaY || event.detail || event.wheelDelta;
	if(delta > 0) d+=2;
	else d-=2;
	if(d < 0 ) d == 0;
	if(d > 256) d == 255;
	if(d > 0 && d < 256)
	{green.innerHTML = d;}
	green.style.background = 'rgb(0,'+ d + ',0)';
	mix.style.background = 'rgb('+ i + ',' + d + ',' + s + ')';
}

blue.onwheel = function(event){
	let delta = event.deltaY || event.detail || event.wheelDelta;
	if(delta > 0) s+=2;
	else s-=2;
	if(s < 0 ) s == 0;
	if(s > 256) s == 255;
	if(s > 0 && s < 256)
	{blue.innerHTML = s;}
	blue.style.background = 'rgb(0,0,'+ s +')';
	mix.style.background = 'rgb('+ i + ',' + d + ',' + s + ')';
}

