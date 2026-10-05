const display = document.getElementById("desplay");

function appendTodisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calcule() { 
    try{
         display.value = eval(display.value);
    } 
    catch(error){ 
        display.value = "Error";
    }
}