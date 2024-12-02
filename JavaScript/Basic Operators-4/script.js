
//Math Operations
const now = 2024;
let ageSatya = now - 2003;
let ageSai = now - 1999;
console.log(ageSatya, ageSai);

console.log(ageSatya * 2, ageSatya/2, 2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Satya";
const lastName = "Vanapalli";
console.log(lastName + " " + firstName);


//Assignment Operations
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 5; // x = x * 5 = 125;
--x;
x++;
console.log(x);


//Comparision Operators --> <, >, <=,>=
console.log(ageSatya < ageSai);

console.log(ageSatya >= 21);

console.log(ageSai <= 25);

const fullAge = ageSatya >= 20;
console.log(typeof fullAge);


//Operator Precedence
let avgAge = (ageSatya + ageSai) / 2;
console.log(avgAge);