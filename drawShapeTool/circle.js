import DrawingShape from "./shape.js";

export default class DrawingCircle extends DrawingShape{
 
   
     drawSpecificShape() {
        const ctx = this.context;
        ctx.beginPath();

        if(this.lineCreated) {
           this.eraseAll();
        }

        const xDiff = this.curX - this.startX;
        const yDiff = this.curY - this.startY;
        const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        const centerX = (this.curX + this.startX) / 2;
        const centerY = (this.curY + this.startY) / 2; 
        //ctx.moveTo(this.startX, this.startY);
        ctx.arc(centerX, centerY, dist / 2, 0, 2 * Math.PI)

    }

   
    
     
}


