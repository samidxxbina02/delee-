// const number1 = 5;
// const string = "5";
// const nul = null;
// let undef;
// const boolean = true;
// const obj = {
//   name: "Aidar",
//   age: 20,
//   language: "JS",
// };
// const symb = Symbol("@");
// const asdasdasdasdasd = 5456345634634634634563456346n;

// console.log(typeof obj);

// const result = +prompt("Введите число!!!");

// if (result < 50) {
//   console.log("Число меньше 50");
// } else {
//   console.log("Число больше 50");
// }

// const inp = document.querySelector("input");

// let text = null;

// inp.addEventListener("input", (event) => {
//   text = event.target.value;
//   console.log(text);
// });

const headerMenu = document.querySelector(".header_menu");
const sandwich = document.querySelector(".sandwich");

sandwich.addEventListener("click", () => {
  headerMenu.classList.toggle("header_menu_block_state");
  sandwich.classList.toggle("active");
});
