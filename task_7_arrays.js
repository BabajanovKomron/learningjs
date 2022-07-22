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

buttonRandom.addEventListener("click", function () {
  // TODO: create an array with random number of elements, where each element is also random. Print it in console.
  // ЗАДАЧА: создай массив со случайным количеством элементов, где каждый элемент тоже случайный. Напечатай его в консоли.
  var array2 = [];
  array2.length = Math.round(Math.random() * 100);
  for(let i = 0; i < array2.length; i++){
    array2[i] = Math.random(); 
    console.log(array2[i]);
  }
});

// PART 4
var buttonInvert = document.createElement("button");
buttonInvert.innerHTML = "INVERT";
document.body.appendChild(buttonInvert);

buttonInvert.addEventListener("click", function () {
  // TODO: invert the values of input elements. (0 -> 1 & 1 -> 0)
  // ЗАДЧА: инверитруй (поменяй на противоположные) значения элементов input. (0 -> 1 & 1 -> 0)
  var l = document.getElementsByTagName("input");
  for(let i = 0; i < l.length; i++){
      l[i].value = (Number(l[i].value) + 1) % 2; // Number("1") => 1    Number("a") => NaN
      // l[i].value = (l[i].value == 0) ? 1 : 0; // TERNARY OPERATOR
}
  console.log("INVERTED!");
});

// PART 5
var buttonA2 = document.createElement("button");
buttonA2.innerHTML = "ARRAY OF ARRAYS";
document.body.appendChild(buttonA2);

buttonA2.addEventListener("click", function () {
  // TODO: create an array of arrays in a variable array2 and print it in console.
  // ЗАДАЧА: создай массив из массивов в переменной array2 и напечатай его в консоли.
  /*
  2-dimensional array
  
          0     1     2
 0    [  [1]   [3]   [6]  ]
 1    [  [2]   [4]   [7]  ]
 2    [        [5]   [8]  ]
 3    [              [9]  ]
 
 (array2[2]) [3]
  */
  var array2 = [ [1,2], [3,4,5], [6,7,8,9] ];
  console.log("ARRAY OF ARRAYS:");
  for(let i = 0; i < array2.length; i++){
    for(let j = 0; j < array2[i].length; j++){
      console.log(array2[i][j]);
    }
    console.log("\n");
  }
});
