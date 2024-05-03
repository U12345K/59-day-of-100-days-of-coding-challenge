"use strict";
// task 1
// Rewrite the "switch" into an "if"
Object.defineProperty(exports, "__esModule", { value: true });
let browser = `Edge`;
if (browser == 'Edge') {
    console.log("You've got the Edge!");
}
else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    console.log('Okay we support these browsers too');
}
else {
    console.log('We hope that this page looks ok!');
}
//   task 2
// Rewrite "if" into "switch"
let a = 1;
switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}
// task 3
// Last loop value
let i = 3;
while (i) {
    console.log(i--);
}
// task 4
// Which values does the while loop show
let I = 0;
while (++I < 5) {
    console.log(i);
}
let Ii = 0;
while (Ii++ < 5) {
    console.log(Ii);
}
;
// tack 5
// Which values get shown by the "for" loop?
for (let i1 = 0; i1 < 5; ++i1) {
    console.log(i1);
}
for (let i1 = 0; i1 < 5; i1++) {
    console.log(i1);
}
// task 6
// Output even numbers in the loop
for (let i2 = 2; i2 <= 10; i2++) {
    if (i2 % 2 == 0) {
        console.log(i2);
    }
}
//  task 7
// Replace "for" with "while"
let iI = 0;
while (i < 3) {
    console.log(`number ${iI}!`);
    iI++;
}
// task 8
// Output prime numbers
let n = 10;
nextPrime: for (let i3 = 2; i3 <= n; i3++) { // for each i...
    for (let j = 2; j < i3; j++) { // look for a divisor..
        if (i3 % j == 0)
            continue nextPrime; // not a prime, go next i
    }
    console.log(i3); // a prime
}
