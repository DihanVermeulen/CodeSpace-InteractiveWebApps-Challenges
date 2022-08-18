 //Create a class called Tasks
        //Make sure your class has a constructor with a private variable
        //Within your Constructor, make sure you have a parameter of task which is equal to a private variable in your constructor
        //Create a getter that returns the variable within your constructor
        //Add your code below
class Tasks {
    constructor(task) {
        this._task = task;
    }
    get task() { 
        return this._task;
     }
}
//Instantiate your Task class and store the object in a variable
//Console log your Tasks object, by calling the getter
//Your code should look like the example below:
//const myObject = new Tasks('whatsup')
//console.log(myObject.task)
//Add your code below

let x = new Tasks("do dishes");
console.log(x.task);