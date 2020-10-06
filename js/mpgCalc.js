function isValid() {
    clearSpans();
    var isMilesDataValid = true;
    var isGallonsDataValid = true;
    isMilesDataValid = validateData("miles", "Miles driven is required and must be a number");
    isGallonsDataValid = validateData("gallons", "Gallons used is required and must be a number");
    if (!isMilesDataValid || !isGallonsDataValid) {
        return false;
    }
    return true;
}
function validateData(id, errMsg) {
    var inputBox = document.getElementById(id);
    var inputBoxValue = inputBox.value;
    if (inputBoxValue == "" || isNaN(parseFloat(inputBoxValue))) {
        inputBox.nextElementSibling.innerHTML = errMsg;
        return false;
    }
    return true;
}
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles").value;
        var gallons = document.getElementById("gallons");
        var gallonsData = gallons.value;
        var mpg = calculateMPG(parseFloat(miles), parseFloat(gallonsData));
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = document.getElementById("mpg");
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var mpg = milesDriven / gallonsUsed;
    return mpg;
}
window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    calcBtn.onclick = main;
    var clearBtn = document.getElementById("clear");
    clearBtn.onclick = resetForm;
    document.getElementById("miles").ondblclick = clearMiles;
    document.getElementById("gallons").ondblclick = clearGallons;
};
function resetForm() {
    var allBoxes = document.querySelectorAll("input[type = text]");
    for (var i = 0; i < allBoxes.length; i++) {
        var currBox = allBoxes[i];
        currBox.value = "";
    }
    clearSpans();
}
function clearSpans() {
    var allSpans = document.querySelectorAll("span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        currSpan.innerHTML = "*";
    }
}
function clearMiles() {
    var clearMilesBox = document.getElementById("miles");
    clearMilesBox.value = "";
}
function clearGallons() {
    var clearGallonsBox = document.getElementById("gallons");
    clearGallonsBox.value = "";
}
