import { SHAPE } from "./consts/shape.js";
import DrawingCircle from "./drawShape/circle..js";
import DrawingLine from "./drawShape/line.js";

var canvas, ctx, flag = false,
prevX = 0,
curX = 0,
prevY = 0,
curY = 0,
dot_flag = false;
var shape = SHAPE.LINE;
var color = "black";
var lineWidth = 2;
var width;
var height;
var line;
var circle;

    function paintColor(colorButton) {
        color = colorButton.id;
        if (color == "white") lineWidth = 14;
        else lineWidth = 2;
    }
    
    function connectColorButtonToListener() {
        const colors = document.getElementsByClassName("color");
        console.log(colors);
        for(let i = 0; i < colors.length ; i++) {
            console.log(colors[i])
            colors[i].addEventListener('click', () => paintColor(colors[i]));
        }
    }

    function init() {
        canvas = document.getElementById('can');

        ctx = canvas.getContext("2d");
        width = canvas.width;
        height = canvas.height;
    

        connectColorButtonToListener();
        line = new DrawingLine(canvas, ctx);
        circle = new DrawingCircle(canvas, ctx);
        const lineButton = document.getElementById("line");
        const circleButton = document.getElementById("circle");
        lineButton.addEventListener("click", () => line.init());
        circleButton.addEventListener("click", () => circle.init());
    }
    
       
    function erase() {
        const wantToClear = confirm("Want to clear");
        if (wantToClear) {
            ctx.clearRect(0, 0, width, height);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }
    
    function findxy(direction, e) {
        if (direction == 'down') {
            prevX = curX;
            prevY = curY;
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                // ctx.beginPath();
                // ctx.fillStyle = color;
                // ctx.fillRect(curX, curY, 2, 2);
                // ctx.closePath();
                // dot_flag = false;
            }
        }
        if (direction == 'up' || direction == "out") {
            flag = false;
        }
        if (direction == 'move') {
            if (flag) {
                prevX = curX;
                prevY = curY;
                curX = e.clientX - canvas.offsetLeft;
                curY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }

    function draw() {
        console.log(ctx)
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(curX, curY);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
    }

init();