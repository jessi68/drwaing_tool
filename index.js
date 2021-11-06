import { SHAPE } from "./consts/shape.js";

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

    function paintColor(colorButton) {
        console.log(color);
        console.log(colorButton);
        color = colorButton.id;
        console.log(color);
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
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);

        connectColorButtonToListener();
    }
    
    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(curX, curY);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        const wantToClear = confirm("Want to clear");
        if (wantToClear) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }
    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = curX;
            prevY = curY;
            curX = e.clientX - canvas.offsetLeft;
            curY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.fillRect(curX, curY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = curX;
                prevY = curY;
                curX = e.clientX - canvas.offsetLeft;
                curY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }

init();