const btn = document.getElementById("btn");
const num = document.getElementById("num");

btn.addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * 41) - 20;
  num.textContent = randomNumber;
});

