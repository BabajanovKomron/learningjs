var input1 = document.createElement("input");
input1.value = 1;
input1.type = "number";
input1.style.maxWidth="4em";
document.body.appendChild(input1);

var button = document.createElement("button");
button.innerHTML = "INCREMENT";
document.body.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);

/*
a ↑↑ X = ...
a ↑ X = ((a^a)^a)^a ... X times     // UNIVERSITY
a ^ X = a * a * a * a ... X times   // 6-9
a * X = a + a + a + ... X times
a + X = ((a++) ++) ++ ... X times  // SCHOOL LEVEL
a++ = ???  // HINT: it consists from logical operators
What is logical operators? = we will implement them with arrays
Phyiscal level !!! = example of how you can build your own circuit (контур, или микросхема)
*/

/*
    10 == 010
    0001 >> 1  -> 0000    // 1 >> 1 -> 0
    0010 >> 1  -> 0001    // 2 >> 1 -> 1
    0011 >> 1  -> 0001    // 3 >> 1 -> 1
    0100 >> 1  -> 0010    // 4 >> 1 -> 2
    0101 >> 1  -> 0010    // 5 >> 1 -> 2
    0110 >> 1  -> 0011    // 6 >> 1 -> 3
    0111 >> 1  -> 0011    // 7 >> 1 -> 3
    1
    1010 >> 2  -> 0010 == 0d2
    
    A >> X  ==  Math.floor(A) * 2^(-X)
    
    0001 << 1  -> 0010 == 0d2
    0001 << 2  -> 0100 == 0d4
    0001 << 3  -> 1000 == 0d8
    0010 << 1  -> 0100 == 0d4 
    0011 << 1  -> 0110 == 0d6
    A << X  == A * 2^X
    0.010

    MATHEMATICS: -...000000000000000001  >> 1    -> -...0000000000
    COMPUTERS:   1|000 0000 0000 0001 -> -1   >>>   -> 0|100 0000 0000 0000 -> 2^14
                                               >>   -> 1|000 0000 0000 0000 -> -0
    0d-2 -> 0b0|10
    110
*/

var x = 3; // printBinary(x) -> 000000000000000000011
var y = 1; // printBinary(y) -> 000000000000000000001
// 3 | 1 -> 

var printBinary = function(x) {
  var printed = (x >>> 0).toString(2);
  console.log(printed);
  return printed;
};

var customIncrement = function(x) {
	// TODO: implement increment with the help of logical operators
	// ЗАДАЧА: реализовать инкремент с помощью логических операторов
  
  /*  0b10000 - шестнадцать
      0b10    - два
      0b111   - семь
      0d10000 - десять тысяч
      0d10    - десять
      0d111   - сто одинадцать
      
      11111111 + 00000001 -> 0000 0000
      255 + 1 = 0   
      
      
        
       0,     1,  ...,     127     ...,          255  | - 127
      /\     /\            /\                    /\
      |      |             |                     |
      -127, -126, ..., -1, 0, 1, ..., 126, 127, 128
      
      1000                 0000                 0111
      0000                 0000                 1111
  */
  
  // 3 -> 4  , 10 -> 11  , 0 -> 1,  100 -> 101,  x -> x++
  // 0d3 -> 0b11 -> ... -> 0b00 -> 0d0
  
  // 0d3  -> ... -> 0d4         2 & 0 ->  0
  // 0b11 -> ... -> 0b100      10 & 00 -> 00
  
  return ++x;
}


button.addEventListener("click", function() {
		if ( (input1.value == "")) {
			input1.value = 0;
		}
		
		var ar1 = Number(input1.value);
		if ( ar1 == ar1 ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			result.innerHTML += customIncrement(ar1);
      result.innerHTML += "<br>";
      result.innerHTML += printBinary(ar1);
      result.innerHTML += "<hr>";
		}
	}
);


// TODO: 
// ЗАДАЧА: 