// წამოვიღეთ სამი ელემენტი კლასით და შევინახეთ ცვლადში

const inpt = document.querySelector(".inpt");
const btn = document.querySelector(".button");
const error = document.querySelector(".error-p");
const errorImg = document.querySelector(".error");
const inputDiv = document.querySelector(".input-div");

// email validation - იმეილის ვალიდაცია რეგექსით
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// თუ ბათონის კლიკზე იმეილი არ უდრის ინფუთის ველიუს, მაშინ გამოიტანოს ერორის p, ერორის სურათი და დივის ბორდერი; და თუ უდრის, მაშინ არ გამოაჩინოს ყველა ეს ზემოთ ჩამოთვლილი ელემენტი.

btn.addEventListener("click", () => {
  console.log(inpt.value);
  if (!regex.test(inpt.value)) {
    error.style.display = "block";
    errorImg.style.display = "block";
    inputDiv.style.border = "2px solid #F96464";
  } else {
    error.style.display = "none";
    errorImg.style.display = "none";
    inputDiv.style.border = "1px solid #CE9898";
  }
});
