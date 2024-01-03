var number_buttons = document.querySelectorAll(".number-button");
var calc_buttons = document.querySelectorAll(".calc-button");
var clear_buttons = document.querySelectorAll(".clear-button");
var operation = '';
var x = '';
var y = '';

number_buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      var innerHTMLValue = event.target.innerHTML;
      console.log(innerHTMLValue);
      x = x + innerHTMLValue;
      document.getElementById('output').innerHTML = x;
    });
});

calc_buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      var innerHTMLValue = event.target.innerHTML;
      console.log(innerHTMLValue);
      y = y + x;
      x = '';
      operation = innerHTMLValue;
    });
});

clear_buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      var innerHTMLValue = event.target.innerHTML;
      console.log(innerHTMLValue);
      document.getElementById('output').innerHTML = null;
      console.log('clear');
    });
});

function calc() {
    var num = 0;
    console.log(x);
    console.log(y);
    if (operation == '+') {
        num = parseInt(y) + parseInt(x);
    } else if (operation == '-') {
        num = parseInt(y) - parseInt(x);
    } else if (operation == document.getElementById('times').innerHTML) {
        num = parseInt(x) * parseInt(y);
    } else {
        num = parseInt(y) / parseInt(x);
    }

    console.log(num);
    document.getElementById('output').innerHTML = num;
    x = '';
    y = '';
}
