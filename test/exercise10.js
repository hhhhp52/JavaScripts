//array like object,ducktyping
var obj = {
    '0' : 10,
    '1' : 20,
    '2' : 30,
    '3' : 40,
    length : 4
};
console.log('*********************************************');
var sum = 0;
console.log('sum = ' + sum);
console.log('********************Start********************');
for(var i = 0 ; i < obj.length ; i++){
    console.log('num = ' + obj[i]);
    sum += obj[i];
    console.log('sum = ' + sum);
}
console.log('*********************End*********************');
console.log('*********************************************');




var obj1 = {
    '0' : 10,
    '1' : 30,
    '2' : 50,
    '3' : 70,
    length : 4,
    foreach : foreach
};
function foreach(){
    for(var i = 0 ; i < obj1.length ; i++){
        console.log('num = ' + obj1[i]);
        sum += obj1[i];
        console.log('sum = ' + sum);
    }
}
console.log('*********************************************');
var sum = 0;
console.log('sum = ' + sum);
console.log('********************Start********************');
obj1.foreach(console.log);
console.log('*********************End*********************');
console.log('*********************************************');


var obj2 = {
    '0' : 10,
    '1' : 40,
    '2' : 70,
    '3' : 100,
    length : 4,
    foreach : function(sumnum){
        for(var i = 0 ; i < this.length ; i++){
            sumnum(this[i]);
            sum += this[i];
            console.log('sum = ' + sum);
        }
    }
};

console.log('*********************************************');
var sum = 0;
console.log('sum = ' + sum);
console.log('********************Start********************');
obj2.foreach(console.log);
console.log('*********************End*********************');
console.log('*********************************************');