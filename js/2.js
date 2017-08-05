var can = document.getElementById("can")
if(can.getContext){
	var ctx = can.getContext("2d");

	ctx.fillRect(0, 0, 60, 60);
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(20, 20, 20,0,Math.PI*2);
	ctx.clip();
	


}else{
	alert("not support");
}
