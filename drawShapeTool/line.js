import clearLineSquared, { clearLineRounded } from "../util/clear.js";
import DrawingShape from "./shape.js";

export default class DrawingLine extends DrawingShape {
 
   
     draw() {
        const ctx = this.context;
        ctx.beginPath();
        if(this.lineCreated) {
        const xDiff = this.curX - this.startX;
        const yDiff = this.curY - this.startY;
        const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        // clearLineRounded(this.context, this.prevX, this.prevY, this.curX, this.curY);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //clearLineSquared(this.context, this.startX, this.startY, this.curX, this.curY);
        document.getElementById("canvasimg").style.display = "none";
        }
        
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.curX, this.curY);
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
    }

   
    
     
}


