import DrawingShape from "./shape.js";

export default class DrawingCircle extends DrawingShape{
 
   
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

   
    
     
}


