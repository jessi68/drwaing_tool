import DrawingShape from "./shape.js";

export default class DrawingRectangle extends DrawingShape{
 
   
     drawSpecificShape() {
        const ctx = this.context;
        ctx.beginPath();

        if(this.lineCreated) {
           this.eraseAll();
        }

        let leftX;
        let leftY;

        if(this.curX < this.startX) {
            leftX = this.curX;
            leftY = this.curY;
        } else{
            leftX = this.startX;
            leftY = this.startY;
        }

        const width = this.curX - this.startX;
        const height = this.curY - this.startY;
      
        ctx.rect(leftX, leftY, width, height)

        //ctx.moveTo(this.startX, this.startY);
        
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;

    }

   
    
     
}

