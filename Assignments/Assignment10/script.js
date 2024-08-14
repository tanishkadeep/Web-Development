function focusevent() {
  document.getElementById("input").style.background = "#d5d5bcbb";
  //   alert("Welcome!");
}

function btn1() {
  document.getElementById("p1").innerHTML = "Factorial";
}

function btn2() {
  document.getElementById("p1").innerHTML = "Prime";
}

function btn3() {
  document.getElementById("p1").innerHTML = "Fibonacci";
}

function btn4() {
  document.getElementById("p1").innerHTML = "Natural Number";
}

var mybtn1 = document.getElementById("btn1");
var mybtn2 = document.getElementById("btn2");
var mybtn3 = document.getElementById("btn3");
var mybtn4 = document.getElementById("btn4");
mybtn1.addEventListener("mouseover", btn1);
mybtn2.addEventListener("mouseover", btn2);
mybtn3.addEventListener("mouseover", btn3);
mybtn4.addEventListener("mouseover", btn4);

mybtn1.addEventListener("click", () => {
  a = parseInt(document.getElementById("input").value);
  fact = 1;
  for (i = 1; i <= a; i++) {
    fact = fact * i;
  }

  info1.innerHTML = "Factorial of " + a + " is " + fact + "<br>";
});

mybtn2.addEventListener("click", () => {
  b = parseInt(document.getElementById("input").value);
  flag = 0;

  for (i = 2; i < b; i++) {
    if (b % i == 0) flag = 1;
  }

  if (flag == 0) {
    info2.innerHTML = b + " is prime. " + "<br>";
  } else {
    info2.innerHTML = b + " is not prime. " + "<br>";
  }
});

mybtn3.addEventListener("click", () => {
  c = parseInt(document.getElementById("input").value);

  a = [];
  a[0] = 1;
  a[1] = 1;

  for (i = 2; i < c; i++) a[i] = a[i - 1] + a[i - 2];

  info3.innerHTML = "Fibonacci sequence upto " + c + "th term is : " + a;
});

mybtn4.addEventListener("click", () => {
  d = parseInt(document.getElementById("input").value);

  a = [];
  for (i = 0; i < d; i++) a[i] = i + 1;

  info4.innerHTML = "Natural number upto " + d + ": " + a;
});
