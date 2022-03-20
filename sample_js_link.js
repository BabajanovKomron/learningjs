console.log("script2");

var element = document.createElement("button");
element.innerHTML = "test";
document.body.appendChild(element);

element.addEventListener("mouseover", function() {
		element.innerHTML = prompt('Hello world!!!!!!!!!!!!!!!!!!1');
	}
);