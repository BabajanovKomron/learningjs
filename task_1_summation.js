var input1 = document.createElement("textarea");
input1.value = 1;
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = 2;
document.body.appendChild(input2);

var button = document.createElement("button");
button.innerHTML = "COMBINE!";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "5px";
result.style.borderColor = "green";
document.body.appendChild(result);

var number_put1 = Number(input1.value);
var number_put2 = Number(input2.value);

button.addEventListener("click", function() {
		result.innerHTML = number_put1 + number_put2;
	}
);

// ЗАДАЧА: при сложении должно быть 3, а не 12. Нужно также понять, почему 12, а не 3.
// TODO: summation should result in 3, not 12. You must understand why it's 12 and not 3.