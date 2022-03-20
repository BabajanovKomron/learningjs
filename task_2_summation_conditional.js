var input1 = document.createElement("textarea");
input1.value = "<span style='color:red;'>AAA!</span>";
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = "<span style='background-color:black;color:white;'>BBB?</span>";
document.body.appendChild(input2);

var button = document.createElement("button");
button.innerHTML = "COMBINE!";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);

button.addEventListener("click", function() {
		result.innerHTML = input1.value + input2.value;
	}
);

// TODO: make it so if both inputs are empty, then a special message is displayed in the result.
// ЗАДАЧА: сделай так, что если оба input пустые, то специальное сообщение отображается в result.