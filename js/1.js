var can = document.getElementById("can")
if(can.getContext){
	var ctx = can.getContext("2d");

	ctx.fillRect(0, 0, 60, 60);
	ctx.fill();
	ctx.translate(30,30);
	
	ctx.beginPath();
	ctx.arc(0, 0, 20,0,Math.PI*2);
	ctx.clip();  //裁切一个路径

	var lingrad = ctx.createLinearGradient(0,-75,0,75);
	lingrad.addColorStop(0, '#232256');
	lingrad.addColorStop(1, '#143778');
	  
	ctx.fillStyle = lingrad;
	ctx.fillRect(-30,-30,100,100);
	 // draw stars
    for (var j=1;j<50;j++){
	    ctx.save();
	    ctx.fillStyle = '#fff';
	    ctx.translate(75-Math.floor(Math.random()*150), 75-Math.floor(Math.random()*150));
	    drawStar(ctx,Math.floor(Math.random()*4)+2);
	    ctx.restore();
	    }

	//画星星
	function drawStar(ctx,r){
	  ctx.save();
	  ctx.beginPath()
	  ctx.moveTo(r,0);
	  for (var i=0;i<9;i++){
	    ctx.rotate(Math.PI/5);
	    if(i%2 == 0) {
	      ctx.lineTo((r/0.525731)*0.200811,0);
	    } else {
	      ctx.lineTo(r,0);
	    }
	  }
	ctx.closePath();
    ctx.fill();
    ctx.restore();
	}


}else{
	alert("not support");
}
