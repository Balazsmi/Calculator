const output = document.getElementById('output');

function addToOutput(input) {
    output.value += input;
}

function clearOutput() {
    output.value = '';
}

function calc() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        output.value = 'Error';
    }
}
