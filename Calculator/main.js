const displayEl = document.getElementById("display");

function appendToDisplay(input){
    displayEl.value += input;
}

function clearDisplay(){
    displayEl.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        displayEl.value = "Errror"
    }
}