var fileSelector = document.createElement("textarea");
	fileSelector.value = "vectors";
document.body.appendChild(fileSelector);

var button = document.createElement("button");
	button.innerText = "LOAD JS FILE!";
	button.addEventListener("click", function() {
			var script = document.createElement("script");
			script.src = fileSelector.value.match(/(\w+)(\..*)?/)[1] + ".js";
			document.body.appendChild(script);
		}
	);
document.body.appendChild(button);