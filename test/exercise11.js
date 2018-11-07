function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.PI = 3.14159;

Circle.prototype.area = function(){
    return this.r * this.r * Circle.PI;
}
var circle = new Circle(3,3,2)
console.log(circle.area());