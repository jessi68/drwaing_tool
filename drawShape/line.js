export default class DrawingLine {
 
    constructor(canvas, context) {
        this.isMoving = false;
        this.lineCreated = false;
        this.canvas = canvas;
        this.startX = 0;
        this.startY = 0;
        this.curX = 0;
        this.curY = 0;
        this.context = context;
        this.color = "black"
    }

     draw() {
        const ctx = this.context;
        ctx.beginPath();
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.getElementById("canvasimg").style.display = "none";
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.curX, this.curY);
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
    }

    mouseMove(e) {
        if(this.isMoving) {
            console.log("mouse move")
            // this.startX = this.curX;
            // this.startY = this.curY;
            this.curX = e.clientX - this.canvas.offsetLeft;
            this.curY = e.clientY - this.canvas.offsetTop;
            this.draw();
            this.lineCreated = true;
        }
    }

    stop(e) {
       this.isMoving = false;
    }

     init() {
         console.log('ddd');
         console.log(this);
        const canvas = this.canvas;
        canvas.addEventListener("mousemove", function (e) {
            this.mouseMove(e);
        }.bind(this), false);
        canvas.addEventListener("mousedown", function (e) {
            this.mousedown(e);
        }.bind(this), false);
        canvas.addEventListener("mouseup", function (e) {
            this.stop(e);
        }.bind(this), false);
        canvas.addEventListener("mouseout", function (e) {
            this.stop(e);
    }.bind(this), false);
    }
    
     mousedown(e) {
         console.log("mouse down")
       this.startX = this.curX;
       this.startY = this.curY;
       this.curX = e.clientX - this.canvas.offsetLeft;
       this.curY = e.clientY - this.canvas.offsetTop;
       this.isMoving = true;
    }
    
     
}


