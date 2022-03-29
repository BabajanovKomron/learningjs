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
var loopMultiplication = function(a, b){
	// TODO: implement multiplication with additions in a loop, so that this function would return the same result.
	// ЗАДАЧА: реализуй умножение через сложения в цикле, чтоб эта функция возвращала такой же результат.
	var q = a;
	var i = 1;
	while(i < b){
		q+=a;
		i++;
	}
	return q;
}
var loopExponentiation = function(a, b){
	// TODO: implement exponentiation with multiplications in a loop, so that this function would return the same result.
	// ЗАДАЧА: реализуй возведение в степень через умножения в цикле, чтоб эта функция возвращала такой же результат. 
	var p = a;
	var l = 1;
	while(l < b){
		p*=a;
		l++;
	}
	return p;
}
var loopAddition = function(a, b){
	// TODO: implement addition with increments in a loop, so that this function would return the same result.
	// ЗАДАЧА: реализуй сложение через инкременты в цикле, чтоб эта функция возвращала такой же результат. 
	a *= -1
	while(b--){
		a--;
	}
	return  a * (-1);
}

button.addEventListener("click", function() {
		if ( (input1.value == "") || (input2.value == "") ) {
			result.innerHTML = "one or both operands are empty";
			return;
		}
		
		var ar1 = Number(input1.value);
		var ar2 = Number(input2.value);
		if ( (ar1 == ar1) && (ar2 == ar2) ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			result.innerHTML += loopMultiplication(ar1, ar2);
			result.innerHTML += "<br/>"; // this element is a new line
			result.innerHTML += loopExponentiation(ar1, ar2);
			result.innerHTML += "<br/>"; // this element is a new line
			result.innerHTML += loopAddition(ar1, ar2);
		} else {
			result.innerHTML = input1.value + input2.value;
		}
	}
);


// TODO: fill the functions
// 					loopMultiplication(a, b)
// 					loopExponentiation(a, b);
// 					loopAddition(a, b);
// (you can find instructions inside each function)
// Understand how returning value from a function works (keyword: return)

// ЗАДАЧА: заполни функции
// 					loopMultiplication(a, b)
// 					loopExponentiation(a, b);
// 					loopAddition(a, b);
// (инструкции можешь найти внутри каждой функции)
// Пойми, как работает возврат значения из функции (ключевое слово: return)