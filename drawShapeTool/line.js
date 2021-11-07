import clearLineSquared, { clearLineRounded } from "../util/clear.js";
import DrawingShape from "./shape.js";

export default class DrawingLine extends DrawingShape {
 
   
     drawSpecificShape() {
        const ctx = this.context;
        ctx.beginPath();
        if(this.lineCreated) {
            this.eraseAll();
        }
        
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.curX, this.curY);
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();
    }

   
    
     
}


