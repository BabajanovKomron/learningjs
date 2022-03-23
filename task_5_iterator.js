var input1 = document.createElement("textarea");
input1.value = 1;
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = 100;
document.body.appendChild(input2);

var button = document.createElement("button");
button.innerHTML = "COMBINE!";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);

var createHTMLElementWithTypeAndContent = function(type, content){
	var element = document.createElement(type);
	element.innerHTML = content;
	document.body.appendChild(element);
}

button.addEventListener("click", function() {
		if ( (input1.value == "") || (input2.value == "") ) {
			result.innerHTML = "one or both operands are empty";
			return;
		}
		
		var ar1 = Number(input1.value);
		var ar2 = Number(input2.value);
		if ( (ar1 == ar1) && (ar2 == ar2) ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			while (ar1 < ar2) {
				ar1 += 1;
				createHTMLElementWithTypeAndContent("p", "A!");
			}
			result.innerHTML = ar1;
		} else {
			result.innerHTML = input1.value + input2.value;
		}
	}
);

// TODO: Understand what happens here. Make it so when the button is pressed, if a number in input1 is less than input2, then one more p element is added to HTML.
// ЗАДАЧА: Пойми, что здесь происходит. Сделай так, что когда кнопка нажата, если число в input1 меньше чем в input2, то в HTML добавляется еще один p элемент.