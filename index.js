// recievesAFunction
function receivesAFunction(callBack) {
    return callBack();

}

console.log(receivesAFunction(function() { 
    return "Hello";}));

//returnsANamedFunction

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");

    };

}
console.log(returnsANamedFunction());

//returnsAnAnonoymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");

    };

}
const anonymous = returnsAnAnonymousFunction();
console.log(anonymous());