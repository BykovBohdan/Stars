var ctx, w, h, canvas,
    N = 1000,
    point = [];
    
 function statPoint (x, y, vX, vY) {
      this.x = x;
      this.y = y;     
      this.vX = vX;
      this.vY = vY;	  
 }
 
 function rand (min, max) {
	 return Math.random() * (max - min) + min;
 }
 
 window.onload = function () {
	 canvas = document.getElementById("MYcanvas");
	 w = canvas.width;
	 h = canvas.height;
	 ctx = canvas.getContext("2d");
	 
	 init ();
 }
 
function init() {
	 for (var i = 0; i < N; ++i) {
		 point[i] = new statPoint( rand(0, w), rand(0, h), Math.random() - Math.random(), Math.random() - Math.random());
		 console.log(point[i]);
	 }

	window.requestAnimationFrame(draw);   
 }
 
 function draw() {
	// ctx.clearRect(0,0,w,h);
	 ctx.fillStyle = "rgba(0,0,0,0.1)";
	 ctx.fillRect(0, 0, w, h);
	 pointDraw();
	  
 }
 
 
 function pointDraw () {
         	 
         ctx.fillStyle = "rgba(255,255,255,0.6)";
	 for (var i = 0; i < N; ++i) {
		 ctx.beginPath();
		 ctx.arc(point[i].x, point[i].y, 1, 0,  2 * Math.PI, false);
		 point[i].x += point[i].vX;
	     point[i].y += point[i].vY;
		 //минутка быдлокода
		            // правая стенка                             левая стенка      
		  if ((point[i].x + 1) + point[i].vX > w || (point[i].x - 1) + point[i].vX < 0 ) {
     point[i].vX = - point[i].vX;
     }
	 //                    верх                                      низ
          if ((point[i].y - 1 ) + point[i].vY < 0 || (point[i].y + 1 ) + point[i].vY > h )  {
      point[i].vY = -point[i].vY
    } 
	
	
		 ctx.fill();
		 ctx.closePath();
		 
	 }
    window.requestAnimationFrame(draw);    
 }