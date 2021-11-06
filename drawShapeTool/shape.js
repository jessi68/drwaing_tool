export default class DrawingShape {
 
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
        this.history = [];
    }

    eraseAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.getElementById("canvasimg").style.display = "none";
    }

     draw() {
        
    }

    mouseMove(e) {
        if(this.isMoving &&  !this.lineCreated)  {
            this.startX = this.curX;
            this.startY = this.curY;
            this.curX = e.clientX - this.canvas.offsetLeft;
            this.curY = e.clientY - this.canvas.offsetTop;
            this.draw();
            this.prevX = this.curX;
            this.prevY = this.curY;
            this.lineCreated = true;
        }
        if(this.isMoving) {
            this.curX = e.clientX - this.canvas.offsetLeft;
            this.curY = e.clientY - this.canvas.offsetTop;
            this.draw();
            this.prevX = this.curX;
            this.prevY = this.curY;
        } 
    }

    stop(e) {
        this.lineCreated = false;
       this.isMoving = false;
       console.log("stop");
       this.history.push({'curX': this.curX, 'curY': this.curY, 'startX': this.startX, 'startY': this.startY});
    }

     init() {
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
       this.startX = this.curX;
       this.startY = this.curY;
       this.curX = e.clientX - this.canvas.offsetLeft;
       this.curY = e.clientY - this.canvas.offsetTop;
       this.isMoving = true;

    }
    
     
}