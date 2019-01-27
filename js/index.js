var box = document.getElementById("display");

function toScreen(x) {
  box.value += x;
  if (x === "c") {
    box.value = "";
  }
}

function answer() {
  x = box.value;
  x = eval(x);
  box.value = x;
}

function power() {
  // for diversity can use for square root Math.sqrt() ,  or for power  can use x=eval(Math.pow(x, x));  same as x=Math.pow(x, x)
  x = box.value;
  x = eval(x * x);
  box.value = x;
}

function backspace() {
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0, len);
  box.value = newNum;
}