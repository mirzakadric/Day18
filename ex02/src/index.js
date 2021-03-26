// Only change code below this line

function* insideGenerator1(){
    for (var i = 0; i <= 5; i++){
        var x = yield i
    }
}

function* insideGenerator2(){
    for (var i = 10; i <= 15; i++){
        var x = yield i
    }
}

function* insideGenerator3(){
    for (var i = 6; i <= 9; i++){
        var x = yield i
    }
}

function* myGenerator(){
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

const iterator = myGenerator();
var fifteenArray = [];

for (i = 0; i <= 12; i++){
    fifteenArray.push(iterator.next());
}
console.log(fifteenArray);

// Only change code above this line

module.exports = {fifteenArray, myGenerator}