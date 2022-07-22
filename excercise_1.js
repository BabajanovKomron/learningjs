var INPUT_PASSWORD = document.createElement("input");
INPUT_PASSWORD.value = "Password";
INPUT_PASSWORD.type = "text";
document.body.appendChild(INPUT_PASSWORD);

var INPUT_TEXT = document.createElement("textarea");
INPUT_TEXT.value = "The text that this program will encrypt.";
document.body.appendChild(INPUT_TEXT);


var BUTTON_ENCRYPT = document.createElement("button");
BUTTON_ENCRYPT.innerHTML = "Encrypt!";
document.body.appendChild(BUTTON_ENCRYPT);

var BUTTON_DECRYPT = document.createElement("button");
BUTTON_DECRYPT.innerHTML = "Decrypt!";
document.body.appendChild(BUTTON_DECRYPT);

var output_text = document.createElement("div");
output_text.value = "The text that this program will encrypt.";
document.body.appendChild(output_text);

BUTTON_ENCRYPT.addEventListener("click", function() {
		var Encrypted_text = Encryptor(INPUT_PASSWORD.value, INPUT_TEXT.value);
    output_text.innerHTML = "";
    for(let i = 0; i < Encrypted_text.length; i++){
      output_text.innerHTML += Encrypted_text[i];
    }
	}
);

BUTTON_DECRYPT.addEventListener("click", function() {
		var Decrypted_text = Decryptor(INPUT_PASSWORD.value, INPUT_TEXT.value);
    output_text.innerHTML = Decrypted_text;
	}
);

// MY GOOGLED SOLUTION
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript#answer-24153275
function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

function BinaryStringToNumber(){
  // "-0000000 00000000 00000000 00001000"
  // "10000000 00000000 00000000 00001000" -> 8
}

// HELPER FUNCTIONS (ВСПОМАГАТЕЛЬНЫЕ ФУНКЦИИ)

// x + a = b
// x = b - a

// x * a = b  |  /a      a != 0
// x * a / a = b / a

// x ^ a = 1
// a = 0

// x + 1 = 0
// x = 0 - 1
// x + 2 = 0
// x = 0 - 2
// x + a = 0
// x = -a

// /\_/\_  sin(x) + a == sin(x) + PI/3  _/\_/\
// sin(x) + a = sin(PI/3) + a = 1/2 + a

function logicOperator(a, b, array = [ [0, 0], [1, 1] ]){
  var DESHIFR = "";
  for(var i = 0; i < a.length; i++){
    DESHIFR += array[a[i]][b[i]];
  }
  return DESHIFR;
}

// logicOperator("1", "0", [[0, 0], [0, 1]]); // logic AND
// logicOperator("1", "0", [[0, 1], [1, 1]]); // logic OR
// function plus(a, b, sign=1){
//   return a + sign*b;
// }

// plus(a, b, 1) { return a + b; }
// plus(a, b, -1) { return a - b; }


  //  S  &  P  -> R   R !& P   ->  S 
  // "0" & "0" -> 1   1 !& "0" -> "0"
  // "0" & "1" -> 0   0 !& "1" -> "0"
  // "1" & "0" -> 0   0 !& "0" -> "1"
  // "1" & "1" -> 1   1 !& "1" -> "1"


  // ["0", "1", "2", ...]
  // ["A", "B", "C", ...]
  // 0-B, 1-D, 2-A
  // [0, 1, 2, 3] * 0 = [0, 0, 0, 0] -> [?, ?, ?, ?]
  // [0, 1, 2, 3] * 5 = [0, 5, 10, 15]; -> [0, 1, 2 , 3]


// TODO: write a function that will password and source_text to obtain a transformed_text
var Encryptor = function (password, source_text) {
  var SOURCE_ASCII = [];
  for(var i = 0; i < source_text.length; i++){
    SOURCE_ASCII.push(source_text.charCodeAt(i));
  }
  
  var SOURCE_BINARY = [];
  for(var i = 0 ; i < SOURCE_ASCII.length; i++){
    // ALU - Arithmetical Logical Unit
    // АЛУ - Арифметическое Логическое Устройство
    // 32bit -> B B B B   64 -> B B B B B B B B
    // int = 4 BYTE = 4 * 8 BIT = 32bit       8 BYTE = 64bit
    // "0 0 0 0 0" -> 5 * 4 -> 20
    // "9 9 9 9 9" -> 5 * 4 -> 20
    // char = 1 BYTE               4 char = 00000000 00000000 00000000 101010101   | 8 byte = 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
    //  00000000 00000000 ...
    //  00001001 00001001 ...
    // source_binary.length = source_text.length * N  , N = разрядность твоей системы (или длине char'a)
    SOURCE_BINARY.push(createBinaryString(SOURCE_ASCII[i]));
  }
  var PASSWORD_ASCII = [];
  for(var i = 0; i < password.length; i++){
    PASSWORD_ASCII.push(password.charCodeAt(i));
  }
  var PASSWORD_BINARY = [];
  for(var i = 0 ; i < PASSWORD_ASCII.length; i++){
    // c = a + b;   c = loopAddition(a, b)
    // c = "ALALA" + "BABABA" = "ALALABABABA"
    // c = stringAddition("ALALA", "BABABA") = "CMCMCA"
    // c = a & b;  c = binaryAND(a, b)
    //                                     000000001 & 000000000 =
    // c = binaryAND("1", "0") = 49 & 48 = 000010011 & 000010010 = 
    PASSWORD_BINARY.push(createBinaryString(PASSWORD_ASCII[i]));
  }  
  var ENCRYPTED_BINARY = "";
  for(var i = 0; i < SOURCE_BINARY.length; i++){
    ENCRYPTED_BINARY += logicOperator(SOURCE_BINARY[i], PASSWORD_BINARY[i%(PASSWORD_BINARY.length)], [[1, 0],[0, 1]]);
  }
  
  // SOURCE
  //  89         |  97       |
  // |10101010100|10101010101|...
  // PASSWORD
  // 11110001110|11110001110...
  // RESULT
  // 10100000100|10100000100|
  
  return ENCRYPTED_BINARY; // text equivalent to transformed_text
};

// Encryotor() -> ["",""]   -> <div> ABABA </div> -> <textarea>ABABA</textarea> -> Decryptor(password, "ABABA")
// Encryptor() -> "" -> Decryptor(password, "")



// TODO: write a function that will use password and transformed_text to obtain a source_text
var Decryptor = function (password, transformed_text) {
  //   ["000000000000000000011111001010", ""]
  //   ["010101010101010101010110101010", ""]
  //   ["97, "" , ...]
  //   ["A", ""]
  var PASSWORD_ASCII_DEC = [];
  for(var i = 0; i < password.length; i++){
   PASSWORD_ASCII_DEC.push(password.charCodeAt(i));
  }
  var PASSWORD_BINARY_DEC = [];
  for(var i = 0; i < PASSWORD_ASCII_DEC.length; i++){
    PASSWORD_BINARY_DEC.push(createBinaryString(PASSWORD_ASCII_DEC[i]))
  }
  
  var SOURCE_BINARY_DEC = [];
  for(var i = 0; i < transformed_text.length; i+=32){
    SOURCE_BINARY_DEC.push(logicOperator(transformed_text.slice(i, i+32), PASSWORD_BINARY_DEC[i%(PASSWORD_BINARY_DEC.length)], [[1, 0],[0, 1]]));
  }
  
  var SOURCE_DEC = "";
  for(var i = 0 ; i < SOURCE_BINARY_DEC.length; i++){
    SOURCE_DEC += String.fromCharCode( parseInt(SOURCE_BINARY_DEC[i], 2) );
  }
  console.log(SOURCE_DEC);
  return SOURCE_DEC; // text equivalent to source_text
};

// var source = "A";
// var key = "P";
// var transformed = Encryptor(key, source); // transformed = "P" & "A" = 97 & 109 = "0000000000000001001101" & "0000000000000001111101"
// var source_back = Decryptor(key, transformed); // source_back = "P" !& "000000000000000001001101" = 97 !& "000000000000000001001101" = "0000000000000001001101" !& "0000000000000001001101"


/* TODO:
      create TextArea or Input or another HTMLelement that will take:
          - password
          - text
      create buttons for:
          - encoding text with a password
          - decoding text with a password

*/

