/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid():boolean{
    clearSpans();
    //function should validate form entries
    //and return true or false corresponding to validity
    let isMilesDataValid:boolean = true;
    let isGallonsDataValid:boolean = true;
    // Validate miles driven, display error if invalid
    isMilesDataValid = validateData("miles", "Miles driven is required and must be a number");
    isGallonsDataValid = validateData("gallons", "Gallons used is required and must be a number")

    if (!isMilesDataValid || !isGallonsDataValid) {
        return false;
    }

    return true;
}

function validateData(id:string, errMsg:string):boolean {
    let inputBox: HTMLInputElement = <HTMLInputElement>document.getElementById(id);
    let inputBoxValue: string = inputBox.value;
    if (inputBoxValue == "" || isNaN(parseFloat(inputBoxValue))) {
        
        inputBox.nextElementSibling.innerHTML = errMsg;
        return false;
    }
    return true;
}

/** 
 * This function should be called when the calculate button is clicked
*/

function main(){
    //check if data is valid
    if(isValid()) {
        let miles:string = (<HTMLInputElement>document.getElementById("miles")).value;
        let gallons:HTMLInputElement = <HTMLInputElement>document.getElementById("gallons");
        let gallonsData:string = gallons.value;
        let mpg = calculateMPG(parseFloat(miles), parseFloat(gallonsData));
        displayResults(mpg);
    }
}

/**
 * Displays given MPG on the form
 * @param milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon:number):void{
    // Get <input> element containg mpg
    // must cast as <HTMLInputElement> otherwise getElementById returns HTMLElement which does not have a .value
    let mpgBox:HTMLInputElement = <HTMLInputElement>document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param {number} milesDriven The number of miles driven
 * @param {number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number{
    let mpg:number = milesDriven / gallonsUsed;
    return mpg;
}

window.onload = function() {
    let calcBtn:HTMLElement = document.getElementById("calculate");
    calcBtn.onclick = main;

    let clearBtn:HTMLElement = document.getElementById("clear");
    clearBtn.onclick = resetForm;

    document.getElementById("miles").ondblclick = clearMiles;
    document.getElementById("gallons").ondblclick = clearGallons;
}

function resetForm():void {
    // clear out all text boxes
    let allBoxes = document.querySelectorAll("input[type = text]");
    for (let i = 0; i < allBoxes.length; i++) {
        let currBox = <HTMLInputElement>allBoxes[i];
        currBox.value = "";
    }

    // reset spans
    clearSpans();
}

function clearSpans() {
    let allSpans = document.querySelectorAll("span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = allSpans[i];
        currSpan.innerHTML = "*";
    }
}

function clearMiles():void {
    let clearMilesBox:HTMLInputElement = <HTMLInputElement>document.getElementById("miles");
    clearMilesBox.value = "";
}

function clearGallons():void {
    let clearGallonsBox:HTMLInputElement = <HTMLInputElement>document.getElementById("gallons");
    clearGallonsBox.value = "";
}