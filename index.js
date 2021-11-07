import { SHAPE } from "./consts/shape.js";
import DrawingCircle from "./drawShapeTool/circle.js";
import DrawingCurve from "./drawShapeTool/curve.js";
import DrawingLine from "./drawShapeTool/line.js";
import DrawingRectangle from "./drawShapeTool/rectangle.js";
import DrawingShape from "./drawShapeTool/shape.js";

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
var rectangle;
var curve;

    function paintColor(colorButton) {
        DrawingShape.color = colorButton.id;
        if (color == "white") DrawingShape.lineWidth = 14;
        else DrawingShape.lineWidth = 2;
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
        rectangle = new DrawingRectangle(canvas, ctx);
        curve = new DrawingCurve(canvas, ctx);

        const lineButton = document.getElementById("line");
        const circleButton = document.getElementById("circle");
        const rectangleButton = document.getElementById("rectangle");
        const curveButton = document.getElementById("curve");

        lineButton.addEventListener("click", () => line.init());
        circleButton.addEventListener("click", () => circle.init());
        rectangleButton.addEventListener("click", () => rectangle.init());
        curveButton.addEventListener("click", () => curve.init());

        const dropdownParent = document.getElementById("myDropdown");

        const lineWeightButtons = dropdownParent.children;

        for(let i = 0; i < lineWeightButtons.length; i++) {
            const lineWeightButton = lineWeightButtons[i];
            console.log(lineWeightButton)
            console.log(lineWeightButton.id);
            
            lineWeightButton.addEventListener("click", (event) => {
                console.log("clicked");
                const lineWeightButton = event.target;
                console.log(lineWeightButton)
                console.log(lineWeightButton.id.toString());
                const lineWeight = parseInt(lineWeightButton.id.toString().substr(4, 1));
                console.log(lineWeight)
                DrawingShape.lineWidth = lineWeight;
            })
            
        }

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