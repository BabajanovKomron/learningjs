var input1 = document.createElement("textarea");
input1.value = 1;
document.body.appendChild(input1);

var input2 = document.createElement("textarea");
input2.value = 0;
document.body.appendChild(input2);

var BiTable = document.createElement("div");
document.body.appendChild(BiTable);

var span00 = document.createElement("span");
span00.innerHTML = "&emsp;&emsp;0";
BiTable.appendChild(span00);

var span01 = document.createElement("span");
span01.style.color = "#0088ff";
span01.innerHTML = "&emsp;&emsp;1";
BiTable.appendChild(span01);

BiTable.appendChild(document.createElement("div"));

var span10 = document.createElement("span");
span10.innerHTML = "0&emsp;";
BiTable.appendChild(span10);

var UL = document.createElement("input");
UL.value = 1;
UL.type = "number";
UL.max=1;
UL.min=0;
UL.style.maxWidth="2em";
BiTable.appendChild(UL);

var UR = document.createElement("input");
UR.value = 1;
UR.type = "number";
UR.max=1;
UR.min=0;
UR.style.maxWidth="2em";
UR.style.backgroundColor="#0088ff";
BiTable.appendChild(UR);

BiTable.appendChild(document.createElement("div"));

var span11 = document.createElement("span");
span11.style.color = "#ff0000";
span11.innerHTML = "1&emsp;";
BiTable.appendChild(span11);

var DL = document.createElement("input");
DL.value = 1;
DL.type = "number";
DL.max=1;
DL.min=0;
DL.style.maxWidth="2em";
DL.style.backgroundColor="#ff0000";
BiTable.appendChild(DL);

var DR = document.createElement("input");
DR.value = 1;
DR.type = "number";
DR.max=1;
DR.min=0;
DR.style.maxWidth="2em";
DR.style.backgroundColor="#aa00ff";
BiTable.appendChild(DR);

BiTable.appendChild(document.createElement("div"));

var button = document.createElement("button");
button.innerHTML = "OPERATIONS";
BiTable.appendChild(button);

var result = document.createElement("div");
result.style.minHeight = "1em";
result.style.borderStyle = "solid";
result.style.borderWidth = "1px";
document.body.appendChild(result);


button.addEventListener("click", function() {
		if ( (input1.value == "") || (input2.value == "") ) {
			result.innerHTML = "one or both operands are empty";
			return;
		}
		
		var ar1 = Number(input1.value);
		var ar2 = Number(input2.value);
		if ( (ar1 == ar1) && (ar2 == ar2) ) { // NaN is never equal to itself. So, (ar1 == ar1) is the same as (ar1 != NaN)
			var bt = [[UL.value, DL.value], [UR.value, DR.value]];
			result.innerHTML = bt[ar1][ar2];
		} else {
			result.innerHTML = input1.value + input2.value;
		}
	}
);


// TODO:
// ЗАДАЧА: