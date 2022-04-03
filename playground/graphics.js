var container_div = document.createElement("div"); // a div that contains everything
	container_div.style.borderStyle = "solid";
	container_div.style.borderWidth = "1px";
document.body.appendChild(container_div);

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
	canvas.width = 800;
	canvas.height = 100;
	canvas.style.borderStyle = "solid";
	canvas.style.borderWidth = "1px";
	canvas.addEventListener("mousemove", function(e){ // function that draws on the canvas
		var rect = e.target.getBoundingClientRect(); // get bounding rectangle
		var posx = e.clientX - rect.left; // calculate relative X position
	    var posy = e.clientY - rect.top; // calculate relative Y position
	    this.strokeStyle="#0000FF"; // set color to Red: 00, G: 00, B: 256 
	    // draw a dot in the coordinates
	    this.beginPath();
	    this.rect(posx, posy, 2, 2);
	    this.stroke();
	    this.closePath();
	}.bind(context));
	canvas.addEventListener("click", function(){ // function that clears canvas
		this[1].clearRect(0, 0, this[0].width, this[0].height);
	}.bind([canvas, context]));
container_div.appendChild(canvas);

var deleteBtn = document.createElement("button"); // A button that deletes the container
	deleteBtn.innerText = "DELETE CANVAS";
	deleteBtn.addEventListener("click", function(){
		this.remove();
	}.bind(container_div));
container_div.appendChild(deleteBtn);
