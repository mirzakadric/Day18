// Only change code below this line

let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

unionSet = new Set([...one].map(one => one).concat([...two].map(two => two)));

intersectionSet = new Set([...one].filter(value => [...two].includes(value)));

differenceSet = new Set([...one].filter(value => ![...two].includes(value)))


console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);
// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };