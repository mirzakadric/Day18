// Only change code below this line
var num6 = 6; 
var num7 = 7;
var num8 = 8;
function* myGenerator(num6, num7, num8){
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* num6, num7, num8;
}

var iterator = myGenerator(arguments);
var generatorArray = [];

for (i = 0; i < 13; i++){
    generatorArray.push(iterator.next());
}
console.log(generatorArray);

// Only change code above this line
module.exports = {generatorArray, myGenerator};