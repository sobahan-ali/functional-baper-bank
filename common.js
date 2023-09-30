function getInputFieldValueById(id) {
    const inputFieldElement = document.getElementById(id);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value = '';
    return inputFieldValue;
};

function getTextElementById(id) {
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
};

function setTextElementValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}