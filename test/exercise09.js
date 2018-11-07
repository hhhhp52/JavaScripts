function print(array){
    for(var i = 0 ; i < array.length ; i++){
        console.log(array[i])
    }
}

var array = [1,2,3];
print(array);
console.log('first');

array.length = 5;
print(array);
console.log('second');

array.length = 2;
print(array);
console.log('third');

array.length = 3;
print(array);
console.log('forth');