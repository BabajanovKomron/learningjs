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
	if(input1.value == "" && input2.value == ""){
		result.innerHTML = "Оба пустые";
	}else if(input1.value == "" && input2.value != ""){
		result.innerHTML = "Только первый пуст";
	}
	else if(input1.value != "" && input2.value == ""){
		result.innerHTML = "Только второй пуст";
	}
	else{
		result.innerHTML = input1.value + input2.value + " (Оба полны)";
	}
	}
);

// TODO: make it so if both inputs are empty, then a special message is displayed in the result.
// ЗАДАЧА: сделай так, что если оба input пустые, то специальное сообщение отображается в result.

//Решение: После нажатия на кнопку я добавил условие, если оба пустые то есть равны "" то вывести слово "Оба пустые"
//Solution: After clicking on the button, I added a condition, if both are empty, that is, equal to "" then display the word "Both are empty"