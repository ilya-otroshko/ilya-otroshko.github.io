let left=document.getElementById("left");
let slider=document.getElementById("slider");
let right=document.getElementById("right");
let img=document.getElementById("slider").children;
let leftDel=document.getElementsByTagName("img");

left.addEventListener("click", function()
{	
	slider.insertAdjacentElement("beforeEnd",leftDel[0]);
	left.style.animation='flash .4s';
});
left.onmousedown=function()
{
	left.style.animation='';
};


right.addEventListener("click", function()
{	
	slider.insertAdjacentElement("afterBegin",leftDel[9]);
	right.style.animation='flash .4s';
});
right.onmousedown=function()
{
	right.style.animation='';
};