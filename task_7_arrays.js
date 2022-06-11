// TODO: first, create an array with a number of elements > 8 in a variable array1
// Then complete the function createAndAddInputElement() acorrding to the instructions inside
// Next, with the help of this function, with the help of a while loop, create an HTML-element for each element of array1 (PART1).
// After that change the values of the elements on the HTML page, read them and output in the console, once again with the help of while (PART2).
// Finally, complete the functions in PART 3 and 4.

// ЗАДАЧА: вначале запиши в переменную array1 массив с числом элементов > 8.
// Затем заполни функцию createAndAddInputElement() согласно инструкции внутри.
// Далее, с помощью этой функции, в цикле while создай HTML-элемент на каждый элемент массива array1 (ЧАСТЬ 1).
// Потом поменяй значение элементов в HTML-странице, считай их и выведи в консоль, опять же с помощью while (PART 2)
// Наконец, заполни функции в ЧАСТЯХ 3 и 4.
var createAndAddInputElement = function (x) {
  // TODO: this function must create an <input type="number" max="1" min="0" /> element and add it to the document body. Input's value must be the argument of a function.
  // ЗАДАЧА: эта функция должна создавать элемент <input type="number" max="1" min="0" value="..." /> и добавлять его в тело документа. значение input'a должно быть аргументом функции.
  if (Number(x) != Number(x)) {
    x = x.charCodeAt(0);
  }
  var input = document.createElement("input");
  input.type = "number";
  input.min = 0;
  input.max = 1;
  input.value = x % 2;
  document.body.appendChild(input);
};

// PART 1
var buttonStatic = document.createElement("button");
buttonStatic.innerHTML = "READ ARRAY FROM CODE!";
document.body.appendChild(buttonStatic);

/*
https://learningjs-komron.glitch.me/task_7_arrays.html


*/

/*
  Вы здесь?
*/

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, "a", "bb"]; // TODO: create an array with N > 8 elements in this variable

buttonStatic.addEventListener("click", function () {
  // TODO: create <input ..> for each element of the array1 with the help of a createAndAddInputElement() function
  // ЗАДАЧА: создай <input ..> для кажого элемента array1 с помощью функции createAndAddInputElement()
  var i = 0;
  while (i < array1.length) {
    createAndAddInputElement(array1[i]);
    i++;
  }
});

// PART 2
var buttonInput = document.createElement("button");
buttonInput.innerHTML = "READ INPUTS INTO ARRAY";
document.body.appendChild(buttonInput);

buttonInput.addEventListener("click", function () {
  // TODO: read input from each <input ...> element you have created, and print them with console.log() function
  // ЗАДАЧА: прочитай входящие данные с каждого элемента <input ...>, который ты создал, и напечатай их с помощью функции console.log()
  console.log("READ ELEMENTS:");

  var l = document.getElementsByTagName("input");
  for (var i = 0; i < l.length; i++) {
    console.log(l[i].value);
  }
});

// PART 3
var buttonRandom = document.createElement("button");
buttonRandom.innerHTML = "RANDOMIZE";
document.body.appendChild(buttonRandom);

buttonInput.addEventListener("click", function () {
  // TODO: create an array with random number of elements, where each element is also random. Print it in console.
  // ЗАДЧА: создай массив со случайным количеством элементов, где каждый элемент тоже случайный. Напечатай его в консоли.
  Math.random();
  console.log("RANDOM ELEMENTS:");
});

// PART 4
var buttonRandom = document.createElement("button");
buttonRandom.innerHTML = "ARRAY OF ARRAYS";
document.body.appendChild(buttonRandom);

buttonInput.addEventListener("click", function () {
  // TODO: create an array of arrays in a variable array2 and print it in console.
  // ЗАДЧА: создай массив из массивов в переменной array2 и напечатай его в кослои.
  var array2;
  Math.random();
  console.log("ARRAY OF ARRAYS:");
});
