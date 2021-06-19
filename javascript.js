var numCalc1 = "";
var numCalc2 = "";
var operation = "";
var display = "";
var answerDone = false;
var PreviousAnswer;





function disp(val) {
    if (answerDone == false) {
        display = display + val;
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";
        document.getElementById("output").style.color = "green";
        document.getElementById("output").style.fontSize = "xx-large";
    } else {
        display = "";
        display = display + val;

        answerDone = false;
    }
    return display;
}

function doOutput(val, type) {
    document.getElementById("output").innerHTML = disp(val);
    if (operation == "" && type == "num") {
        numCalc1 = numCalc1 + val;


    } else if (operation == "" && type == "num") {
        numCalc2 = numCalc2 + val;


    } else if (operation == "") {
        operation = val;
    }
}



function answer() {
    var ans = 0;

    if (operation == "+") {
        numCalc1 = display.substring(0, display.indexOf(operation));
        numCalc1 = parseInt(numCalc1);

        numCalc2 = display.substring(display.indexOf(operation) + 1);
        numCalc2 = parseInt(numCalc2);

        ans = numCalc1 + numCalc2;
        document.getElementById("output").innerHTML = ans;


        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";


    }
    if (operation == "–") {
        numCalc1 = display.substring(0, display.indexOf(operation));
        numCalc1 = parseInt(numCalc1);
        numCalc2 = display.substring(display.indexOf(operation) + 1);
        numCalc2 = parseInt(numCalc2);
        ans = numCalc1 - numCalc2;

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
    if (operation == "*") {
        numCalc1 = display.substring(0, display.indexOf(operation));
        numCalc1 = parseInt(numCalc1);
        numCalc2 = display.substring(display.indexOf(operation) + 1);
        numCalc2 = parseInt(numCalc2);
        ans = numCalc1 * numCalc2;

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
    if (operation == "/") {
        numCalc1 = display.substring(0, display.indexOf(operation));
        numCalc1 = parseInt(numCalc1);
        numCalc2 = display.substring(display.indexOf(operation) + 1);
        numCalc2 = parseInt(numCalc2);
        ans = numCalc1 / numCalc2;

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
    if (operation == "√") {
        numCalc1 = display.substring(display.indexOf(operation) + 1);
        numCalc1 = parseInt(numCalc1);
        ans = Math.sqrt(numCalc1);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }

    if (operation == "^") {
        numCalc1 = display.substring(0, display.indexOf(operation));
        numCalc1 = parseInt(numCalc1);
        numCalc2 = display.substring(display.indexOf(operation) + 1);
        numCalc2 = parseInt(numCalc2);
        ans = Math.pow(numCalc1, numCalc2);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
    if (operation == "sin") {
        numCalc1 = display.substring(display.indexOf(operation) + 3);
        numCalc1 = parseInt(numCalc1);
        ans = Math.sin(numCalc1);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }
    if (operation == "cos") {
        numCalc1 = display.substring(display.indexOf(operation) + 3);
        numCalc1 = parseInt(numCalc1);
        ans = Math.cos(numCalc1);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";

    }


    if (operation == "log") {
        numCalc1 = display.substring(display.indexOf(operation) + 3);
        numCalc1 = parseInt(numCalc1);
        ans = Math.log(numCalc1);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";
    }
    if (operation == "tan") {
        numCalc1 = display.substring(display.indexOf(operation) + 3);
        numCalc1 = parseInt(numCalc1);
        ans = Math.tan(numCalc1);

        document.getElementById("output").innerHTML = ans;

        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";
    }


    PreviousAnswer = ans;
    numCalc1 = "";
    numCalc2 = "";
    operation = "";
    answerDone = true;




}

function PlusMinus() {
    numCalc1 = display.substring(0);
    numCalc1 = numCalc1 * -1;
    document.getElementById("output").innerHTML = numCalc1;
    display = numCalc1;
}



function clearAnswer() {
    document.getElementById("output").innerHTML = "";
    numCalc1 = "";
    numCalc2 = "";
    operation = "";
    answerDone = true;

}




function keyDown1(e) {
    if (e.keyCode == 13) {
        var z = document.getElementById("txtBox2").value;
        var y = document.getElementById("txtBox3").value;
        y = parseInt(y);
        z = parseInt(z);
        var j = Math.floor(Math.random() * (y - z + 1) + z);
        j = parseInt(j);
        document.getElementById("output").innerHTML = j;
        document.getElementById("output").style.color = "blue";
        document.getElementById("output").style.fontFamily = "Impact,Charcoal,sans-serif";
        document.getElementById("output").style.fontSize = "xx-large";
    }
} //z and y represent the inputs the user types in and j represents what random number the computer generates

function RandomNumberGenerator() {
    document.getElementById("txtBox2").style.visibility = 'visible';
    document.getElementById("txtBox3").style.visibility = 'visible';
    document.getElementById("3").style.visibility = 'visible';
    document.getElementById("4").style.visibility = 'visible';
}

//note: I got help for the A level from the tutor once to help debug my code. I had the code for two digits, but he helped me decide where to put it.
