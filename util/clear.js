export default function clearLineSquared(context,x1,y1,x2,y2) {
	var tmp, length;

	// swap coordinate pairs if x-coordinates are RTL to make them LTR
	if (x2 < x1) {
		tmp = x1; x1 = x2; x2 = tmp;
		tmp = y1; y1 = y2; y2 = tmp;
	}

	length = dist(x1,y1,x2,y2);

	context.save();
	context.translate(x1,y1);
	context.rotate(Math.atan2(y2-y1,x2-x1));
	context.clearRect(0,0,length,1);
	context.restore();
}

function dist(x1,y1,x2,y2) { 
	x2-=x1; y2-=y1; 
	return Math.sqrt((x2*x2) + (y2*y2)); 
}

export function clearLineRounded(context,x1,y1,x2,y2,thickness = 1) {
	if (thickness <= 2) {
		clearLineSquared(context,x1,y1,x2,y2,thickness);
		return;
	}

	var tmp, half_thickness = thickness / 2, length,
		PI15 = 1.5 * Math.PI, PI05 = 0.5 * Math.PI
	;

	// swap coordinate pairs if x-coordinates are RTL to make them LTR
	if (x2 < x1) {
		tmp = x1; x1 = x2; x2 = tmp;
		tmp = y1; y1 = y2; y2 = tmp;
	}

	length = dist(x1,y1,x2,y2);

	context.save();
	context.translate(x1,y1);
	context.rotate(Math.atan2(y2-y1,x2-x1));
	x1 = 0;
	y1 = 0;
	x2 = length - 1;
	y2 = 0;
	// draw a complex "line" shape with rounded corner caps

	context.moveTo(x1,y1-half_thickness);
	context.lineTo(x2,y2-half_thickness);
	context.arc(x2,y2,half_thickness,PI15,PI05,false);
	context.lineTo(x1,y1-half_thickness+thickness);
	context.arc(x1,y1,half_thickness,PI05,PI15,false);
	context.closePath();
	x1 -= half_thickness;
	y1 -= half_thickness;

	context.clip();
	context.clearRect(x1,y1,length+thickness,thickness);
	context.restore();
}