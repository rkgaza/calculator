let  display = document.getElementById("input");
let toDisplay = "";

// function for display
// it takes the parameter then concatinates them using the toDisplay variable
const press = (num) => {

    toDisplay += num;
    display.innerText = toDisplay;

};

// function for converting the number into decimal
const toDecimal = () => {

    let decimal;

    if(toDisplay !== "") {
        decimal = toDisplay / 100;
        toDisplay = decimal.toString();
        display.innerText = toDisplay;
    } else {
        toDisplay = "";
        display.innerText = toDisplay;
    }
    
}

// function for clearing the display
const clearAll = () => {

    toDisplay = "";
    display.innerText = toDisplay;

};

// function for deleting the previous char
const deleteChar = () => {

    toDisplay = toDisplay.slice(0, toDisplay.length-1);
    display.innerText = toDisplay;

};

// this function calculates the answer using eval function
const calculate = () => {

    if(toDisplay === "Error"){
        return;
    }

    // fixed is the temporary variable for storing the new string
    // for example if the value of the toDisplay variable is 10x10÷10
    // the if condition below, inside the for loop converts the "x" to * and  "÷" to /
    // after the for loop the value of fixed variable will be 10*10/10
    // then the value of the fixed variable will be assigned to toDisplay varibale gain.

    let fixed = "";

    for(let i=0; i<toDisplay.length; i++){
        
        if(toDisplay[i] === "x") {
            fixed += "*";
        }
        else if(toDisplay[i] === "÷") {
            fixed += "/";
        }
        else {
            fixed += toDisplay[i];
        }
    }

    try {
        const total = eval(fixed);

        toDisplay = total.toString();
        display.innerText = toDisplay;

    } 
    catch {

        toDisplay = "Error";
        display.innerText = toDisplay;

    }

};



