var mouseEvent = "empty";
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
var radius=20;
var width_line=2;
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width_line=document.getElementById("width").value;
    mouseEvent="mouseDown";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        console.log("Current position of X and Y coordinates=");
        console.log("x= "+current_position_of_x+" y= "+current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent="mouseLeave"
}
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}