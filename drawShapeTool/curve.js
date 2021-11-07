import DrawingShape from "./shape.js";


export default class DrawingCurve extends DrawingShape {

    constructor(canvas, context) {
        super(canvas, context);
        this.isCurveCreated = false;
    }

    init() {
        super.init();
        this.canvas.addEventListener("click", this.onMouseClick);
    }

    onMouseClick(e) {
        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
    }

    // 탬플릿 메소드 패턴 적용!!
    drawSpecificShape() {
        const ctx = this.context;
        ctx.beginPath();

        if(!this.lineCreated) {
           this.eraseAll();
        }

        const xDiff = this.curX - this.startX;
        const yDiff = this.curY - this.startY;
        const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        const centerX = (this.curX + this.startX) / 2;
        const centerY = (this.curY + this.startY) / 2; 

        console.log(this.lineCreated);
        if(!this.lineCreated) {
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.curX, this.curY);
           
        } else if(!this.isCurveCreated) {
            this.eraseAll();
            ctx.moveTo(this.startX, this.startY);
            ctx.quadraticCurveTo(centerX / 2, centerY / 2, this.curX, this.curY);
        }
       
        // ctx.arc(centerX, centerY, dist / 2, 0, 2 * Math.PI)
        // ctx.strokeStyle = color;
        // ctx.lineWidth = lineWidth;
    }

    stop(e) {
        this.lineCreated = true;
        console.log(this.lineCreated);
       this.isMoving = false;
       this.history.push({'curX': this.curX, 'curY': this.curY, 'startX': this.startX, 'startY': this.startY});
    }

} 