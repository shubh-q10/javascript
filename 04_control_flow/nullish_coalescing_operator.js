// Nullish coalescing operator (??): null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 75
console.log(val2);

let val3;
val3 = undefined ?? 45
console.log(val3);


let val4;
val4 = null ?? 56 ?? 65
console.log(val4);

let val5;
val5 = null ?? undefined ?? 5 ?? 90
console.log(val5);


let val6;
val6 = undefined ?? null
console.log(val6);
