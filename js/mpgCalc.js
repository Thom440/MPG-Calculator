function isValid() {
    clearSpans();
    var isAllDataValid = true;
    isAllDataValid = validateData("miles", "Miles driven is required and must be a number");
    var gallonsBox = document.getElementById("gallons");
    var gallonsUsed = gallonsBox.value;
    if (gallonsUsed == "" || isNaN(parseFloat(gallonsUsed))) {
        isAllDataValid = false;
        gallonsBox.nextElementSibling.innerHTML = "Gallons used is required and must be a number";
    }
    return isAllDataValid;
}
function validateData(id, errMsg) {
    var inputBox = document.getElementById("miles");
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
