const submit = document.querySelector(".submit");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const starAmount = document.querySelector(".star-amount");
const thankYou = document.getElementById("thank-you");
const ratingForm = document.getElementById("rating-form");
let stars = 0;

let rating;

one.addEventListener("click", () => {
  if (one.className != "selected") {
    one.className = "selected";
    two.className = "rate";
    three.className = "rate";
    four.className = "rate";
    five.className = "rate";
    stars = 1;
    console.log(stars);
  } else {
    one.className = "rate";
    stars = 0;
    console.log(stars);
  }
});

two.addEventListener("click", () => {
  if (two.className != "selected") {
    two.className = "selected";
    one.className = "rate";
    three.className = "rate";
    four.className = "rate";
    five.className = "rate";
    stars = 2;
    console.log(stars);
  } else {
    two.className = "rate";
    stars = 0;
    console.log(stars);
  }
});

three.addEventListener("click", () => {
  if (three.className != "selected") {
    three.className = "selected";
    two.className = "rate";
    one.className = "rate";
    four.className = "rate";
    five.className = "rate";
    stars = 3;
    console.log(stars);
  } else {
    three.className = "rate";
    stars = 0;
    console.log(stars);
  }
});

four.addEventListener("click", () => {
  if (four.className != "selected") {
    four.className = "selected";
    two.className = "rate";
    three.className = "rate";
    one.className = "rate";
    five.className = "rate";
    stars = 4;
    console.log(stars);
  } else {
    four.className = "rate";
    stars = 0;
    console.log(stars);
  }
});

five.addEventListener("click", () => {
  if (five.className != "selected") {
    five.className = "selected";
    two.className = "rate";
    three.className = "rate";
    four.className = "rate";
    one.className = "rate";
    stars = 5;
    console.log(stars);
  } else {
    five.className = "rate";
    stars = 0;
    console.log(stars);
  }
});

submit.addEventListener("click", () => {
  switch (stars) {
    case 1:
      starAmount.textContent = "You selected 1 out of 5";
      thankYou.style.display = "flex";
      ratingForm.style.display = "none";
      break;
    case 2:
      starAmount.textContent = "You selected 2 out of 5";
      thankYou.style.display = "flex";
      ratingForm.style.display = "none";
      break;
    case 3:
      starAmount.textContent = "You selected 3 out of 5";
      thankYou.style.display = "flex";
      ratingForm.style.display = "none";
      break;
    case 4:
      starAmount.textContent = "You selected 4 out of 5";
      thankYou.style.display = "flex";
      ratingForm.style.display = "none";
      break;
    case 5:
      starAmount.textContent = "You selected 5 out of 5";
      thankYou.style.display = "flex";
      ratingForm.style.display = "none";
      break;
    default:
      alert("Please select a rating");
  }
});
