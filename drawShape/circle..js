
export default class DrawingCircle {
 
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

     draw() {
        const ctx = this.context;
        ctx.beginPath();

        if(this.lineCreated) {
       
      
        // clearLineRounded(this.context, this.prevX, this.prevY, this.curX, this.curY);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //clearLineSquared(this.context, this.startX, this.startY, this.curX, this.curY);
        document.getElementById("canvasimg").style.display = "none";
        }

        const xDiff = this.curX - this.startX;
        const yDiff = this.curY - this.startY;
        const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        const centerX = (this.curX + this.startX) / 2;
        const centerY = (this.curY + this.startY) / 2; 
        //ctx.moveTo(this.startX, this.startY);
        ctx.arc(centerX, centerY, dist / 2, 0, 2 * Math.PI)
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
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


