let set = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

let set3 = new Set([...[...set].filter(el => !set2.has(el))]);

console.log(set3);