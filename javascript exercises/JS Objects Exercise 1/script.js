/*Exercise 1.1*/
var me = {
  name: "Karyn",
  age: 31
};

console.log("My name is " + me.name + " and I am " + me.age + " years old.");


/*Exercise 1.2*/
var me = {
  name: "Karyn",
  age: me.age +=1
};

console.log("My name is " + me.name + " and I am " + me.age + " years old.");


/*Exercise 1.3*/
var me = {
  name: "Karyn",
  age: age +=1
};

me.introduce = function () 
{console.log("My name is " + this.name + " and I am " + this.age + " years old."); 
};
me.introduce();


/* I am getting a syntax error on this last exercise, and I have not been able to figure out why.  "Age is not defined"*/