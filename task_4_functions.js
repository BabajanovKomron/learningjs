var input1 = document.createElement("textarea");
input1.value = Math.random();
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = Math.random();
document.body.appendChild(input2);

var button = document.createElement("button");
button.innerHTML = "COMBINE!";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);

var randomizer_function = function(element) { // we can assign function to a variable like this
	if (element.value.search(/0123456789/) >= 0) { // if the string contains any of the "0123456789" symbols
		element.value = Math.random();
	}
}

input1.addEventListener("change", function() {
	randomizer_function(input1);
});
input2.addEventListener("change", function(){
	randomizer_function(input2);
});

button.addEventListener("click", function() {
		if ( (input1.value == "") && (input2.value == "") ) {
			result.innerHTML = "one or both operands are empty";
			return;
		}
		
		var ar1 = Number(input1.value);
		var ar2 = Number(input2.value);
		if ( ar1 < ar2 ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			result.innerHTML = ar1 + ar2;
			var p = document.createElement("p");
			p.innerHTML = "Hello"
			document.body.appendChild(p);

		} else {
			result.innerHTML = input1.value + input2.value;
		}
	}
);

// TODO: Understand what happens here. Make it so when the button is pressed, if a number in input1 is less than input2, then one more p element is added to HTML.
// ЗАДАЧА: Пойми, что здесь происходит. Сделай так, что когда кнопка нажата, если число в input1 меньше чем в input2, то в HTML добавляется еще один p элемент.

//После нажатия добавил textarea