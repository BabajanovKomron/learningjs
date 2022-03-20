var input1 = document.createElement("textarea");
input1.value = "Введите";
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = "Введите";
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
	if(input1.value == Number && input2.value == Number){
		result.innerHTML = Number(input1.value) + Number(input2.value);
	}else if(input1.value == "" && input2.value != ""){
		result.innerHTML = "Только первый пуст";
	}
	else if(input1.value != "" && input2.value == ""){
		result.innerHTML = "Только второй пуст";
	}
	else{
		result.innerHTML = input1.value + input2.value;
	}
	}
);

// TODO: make it so that if a number, then add 2 numbers, and if not, then sculpt together
//(literate word "concatenated"). Naturally, if empty, leave the conditions that were
// ЗАДАЧА: сделай так, чтоб если число, то слагало 2 числа, а если нет, то чтоб лепило вместе 
//(грамотное слово "конкатенировало"). Естественно, если пусто, оставь те условия, что были

//Решение: Сделал по логике
//Solution: Made by logic