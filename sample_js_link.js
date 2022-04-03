console.log("script2");

var element = document.createElement("button");
element.innerHTML = "test";
document.body.appendChild(element);

element.addEventListener("mouseover", function() {
		element.innerHTML = prompt('Hello world!!!!!!!!!!!!!!!!!!1');
	}
);

var counter = 0;
var like = document.createElement("button");
like.innerHTML = "Like";
document.body.appendChild(like);

like.addEventListener("mouseover", function() {
		counter++;
		like.innerHTML = counter;
	}
);