function Account(number,name,balance){
	Object.defineProperties(this , {
		"number" : {
			get : function(){
				return number;
			}
		},
		"name" : {
			get : function(){
				return name;
			}
		},
		"balance" : {
			get : function(){
				return balance;
			}
		},
	});

	this.deposit = function(money){
		if(money < 0){
			throw Error("money cannot be negative");
		}
		balance += money;
	};
}


var acct = new Account("100" , "Schnee" , "100");
console.log(acct.number , acct.name , acct.balance);
console.log("*************************************");

acct.balance = 10000;
console.log(acct.number , acct.name , acct.balance);
console.log("*************************************");

acct.deposit(10000);
console.log(acct.number , acct.name , acct.balance);
console.log("*************************************");







var obj = {
	name : "caterpillar"
};

Object.defineProperty(obj , name , {
	get : function(){
		return "caterpillar".toUpperCase();
	},
	set : function (value) {
		this.__name__ = value.toUpperCase();
	},
});

var name = "caterpillar";
obj.name = "schnee";
//other position
console.log(obj.name);
