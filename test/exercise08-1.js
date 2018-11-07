/*
function test(arg){
    var option = arg || 'default';
    return option;
}

console.log(test());
console.log(test('schnee'));
*/
//***************************************************** 
/*
//long parameter,not good way
function doSome(a,b,c){
    var av = a || 1;
    var bv = b || 2;
    var cv = c || 2;
}
doSome(10,20,30);
*/
/*
function doSome(option){
    var realOption = {
        a : option.a || 1,
        b : option.b || 2,
        c : option.c || 3,
    }
    console.log(realOption);
}

doSome({
    c : 30,
    b : 20
});
*/
//*****************************************************
//var arr = [1,2,3,4,5]
/*
for(var i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}
*/
/*
function printIt(elem){
    console.log(elem);
}

arr.forEach(printIt());
*/
//arr.forEach(console.log);
//arr.forEach(elem => console.log(elem));
//*****************************************************
//IIFE
//*****************************************************
/*
function toString(obj){
    return obj.x + ',' + obj.y;
}

var o1 = {
    x : 10,
    y : 20
};

var o2 = {
    x : 100,
    y : 200
};

console.log(toString(o1));
console.log(toString(o2));
*/
/*
function toString(){
    return this.x + ',' + this.y;
}

var o1 = {
    x : 10,
    y : 20,
    toString : toString
};

var o2 = {
    x : 100,
    y : 200,
    toString : toString
};

console.log(o1.toString());
console.log(o2.toString());
*/
/*
function toString(){
    return this.x + ',' + this.y;
}

var o1 = {
    x : 10,
    y : 20
};

var o2 = {
    x : 100,
    y : 200
};

console.log(toString.call(o1));
console.log(toString.call(o2));
*/
//*****************************************************