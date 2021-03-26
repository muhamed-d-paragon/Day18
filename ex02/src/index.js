function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for (let x = 1; x <= 5; x++) {
        yield x;
    }
}
function* insideGenerator2() {
    for (let x = 10; x <= 15; x++) {
        yield x;
    }
}
function* insideGenerator3() {
    for (let x = 6; x <= 9; x++) {
        yield x;
    }
}
var iterator = myGenerator();
let fifteenArray = [];
for (let i = 0; i < 16; i++) {
    if (i!=15) {
        var array1 = iterator.next().value + '#';
        fifteenArray.push (array1);
    } else {
        var array1 = iterator.next().value + '!';
        fifteenArray.push (array1);
    }
}
console.log(fifteenArray.join(', ', ));
module.exports = { fifteenArray, myGenerator };