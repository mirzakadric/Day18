// Only change code below this line

let shoppingList = new Map([
    ['Banana', 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);
let arrKey = [];
let arrValue = [];
for ( i of shoppingList.entries()) {
    arrKey.push("groceries: " + i[0]),
    arrValue.push("amount: " + i[1])
};

console.log(arrKey);
console.log(arrValue);

for (const [key, value] of shoppingList.entries()) {
    console.log([key, value]);
  }

// Only change code above this line
module.exports = {shoppingList, arrKey, arrValue};