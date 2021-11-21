let one = document.querySelectorAll(".one");
let reOne = document.querySelector("tbody td span.one");

one.forEach((element) => {
  element.addEventListener("input", getTotal1);
});

function getTotal1() {
  var arr = document.querySelectorAll(".one");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reOne.textContent = total;
  }
}

let two = document.querySelectorAll(".two");
let reTwo = document.querySelector("tbody td span.two");

two.forEach((element) => {
  element.addEventListener("input", getTotal2);
});

function getTotal2() {
  var arr = document.querySelectorAll(".two");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reTwo.textContent = total;
  }
}

let three = document.querySelectorAll(".three");
let reThree = document.querySelector("tbody td span.three");

three.forEach((element) => {
  element.addEventListener("input", getTotal3);
});

function getTotal3() {
  var arr = document.querySelectorAll(".three");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reThree.textContent = total;
  }
}

let four = document.querySelectorAll(".four");
let reFour = document.querySelector("tbody td span.four");

four.forEach((element) => {
  element.addEventListener("input", getTotal4);
});

function getTotal4() {
  var arr = document.querySelectorAll(".four");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reFour.textContent = total;
  }
}

let five = document.querySelectorAll(".five");
let reFive = document.querySelector("tbody td span.five");

five.forEach((element) => {
  element.addEventListener("input", getTotal5);
});

function getTotal5() {
  var arr = document.querySelectorAll(".five");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reFive.textContent = total;
  }
}

let six = document.querySelectorAll(".six");
let reSix = document.querySelector("tbody td span.six");

six.forEach((element) => {
  element.addEventListener("input", getTotal6);
});

function getTotal6() {
  var arr = document.querySelectorAll(".six");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reSix.textContent = total;
  }
}

let seven = document.querySelectorAll(".seven");
let reSeven = document.querySelector("tbody td span.seven");

seven.forEach((element) => {
  element.addEventListener("input", getTotal7);
});

function getTotal7() {
  var arr = document.querySelectorAll(".seven");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      total += parseInt(arr[i].value);
    }
    reSeven.textContent = total;
  }
}
