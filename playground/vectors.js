
var drawArrow = function (ctx, p1, p2, c=["#000000", "#ffffff"], w=2){
		  ctx.lineWidth=w;
		  var grd = ctx.createLinearGradient(p1[0], p1[1], p2[0], p2[1]);
			grd.addColorStop(0, c[0]);
			grd.addColorStop(1, c[1]);
	    ctx.strokeStyle=grd;
	    ctx.beginPath();
	    ctx.moveTo(p1[0], p1[1]);
	    ctx.lineTo(p2[0], p2[1]);
	    ctx.stroke();
	    ctx.closePath();
}
var labelText = function (ctx, txt, p, c="#ffffff", s=14, w=1) {
	ctx.lineWidth=w;
	ctx.strokeStyle=c;
	ctx.font=""+s+"px Monospace";
	ctx.strokeText(txt, p[0], p[1]);
}

var container_div = document.createElement("div"); // a div that contains everything
	container_div.style.borderStyle = "solid";
	container_div.style.borderWidth = "1px";
document.body.appendChild(container_div);


var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = 800;
	// canvas.style.borderStyle = "solid";
	// canvas.style.borderWidth = "1px";
	canvas.style.backgroundColor = "#555555";
	canvas.addEventListener("mousemove", function(e){ // function that draws on the canvas
		this[1].clearRect(0, 0, this[0].width, this[0].height);
		var rect = e.target.getBoundingClientRect(); // get bounding rectangle
		var posx = e.clientX - rect.left; // calculate relative X position
    var posy = e.clientY - rect.top; // calculate relative Y position
    var ox = 0.5*this[0].width;
    var oy = 0.5*this[0].height;
    // draw a dot in the coordinates
    drawArrow(this[1], [ox, posy], [posx, posy], ["#ff0000","#ffff00"]);
    labelText(this[1], "O", [ox-7, oy+7], "#000000");
    drawArrow(this[1], [ox, oy], [posx, oy], ["#000000","#00ff00"]);
    labelText(this[1], "X", [posx, oy], "#00ff00");
    drawArrow(this[1], [ox, oy], [ox, posy], ["#000000","#ff0000"]);
    labelText(this[1], "Y", [ox, posy], "#ff0000");
    drawArrow(this[1], [ox, oy], [posx, posy], ["#000000","#ffff00"]);
    labelText(this[1], "A[" + [posx - ox, posy - oy] + "]", [posx, posy], "#ffff00");
	}.bind([canvas, context]));
container_div.appendChild(canvas);



var explanation = document.createElement("p");
explanation.style.backgroundColor="#555555";
explanation.innerHTML += "<br><span style=\"border-top: 1px solid\">O</span><span style=\"color:yellow;border-top: 1px solid\">A</span> = <span style=\"border-top: 1px solid\">O</span><span style=\"color:red;border-top: 1px solid\">Y</span> + <span style=\"border-top: 1px solid\">O<span style=\"color:#00ff00;border-top: 1px solid\">X</span><br>";
explanation.innerHTML += "<br><span style=\"color:red;border-top: 1px solid\">Y</span><span style=\"color:yellow;border-top: 1px solid\">A</span> = <span style=\"border-top: 1px solid\">O</span><span style=\"color:#00ff00;border-top: 1px solid\">X</span><br>";
container_div.appendChild(explanation);

var deleteBtn = document.createElement("button"); // A button that deletes the container
	deleteBtn.innerText = "DELETE CANVAS";
	deleteBtn.addEventListener("click", function(){
		this.remove();
	}.bind(container_div));
container_div.appendChild(deleteBtn);
