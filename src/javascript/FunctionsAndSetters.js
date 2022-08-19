//Using the Class you created in the previous challenge
//Modify this class according to the instructions listed below
class Tasks {
    constructor(task) {
        //edit your private variable to be equal to a value of null
        //Add your code below
        this._task = task
    }

    get getTask() {
        return this._task;
    }

    //Create a "setter" with a parameter of text
    //Create an else if condition, checking whether the given parameter is not a number
    //If the condition is true, set your private variable to be equal to the parameter given
    //if the condition is false, console log an error message in the form of a string e.g. console.log("This shouldn't be a number")
    //Add your code below
    set setTask(text) {
        if(isNaN(text)) {
            console.log("not a number");
            this._task = text;
        }
        else {
            throw 'Enter a number';
        }
    }
}
//Edit the instatiation of your class to not include an argument
//Add your code below

let x = new Tasks("do da dishes");
console.log(x.getTask);
x.setTask = "don't do dishes";
console.log(x.getTask);

//Below you'll see there is a function which is decalared with a parameter name of "event"
//Have a look at querySelectors to understand how to complete the instructions in the code below
function newTask(event) {
    event.preventDefault()//This prevents your form from doing it's default behaviour, which is to submit the form

    //Declare a variable called "value" and have it equal to the value of your input text, by targeting the "task" id created
    //Using the variable equal to your instatiated class, call the setter function and have it equal to the "value" variable above
    //Add your code below


    //Using the empty paragraph element created above
    //The reason to why there was an id assigned to this p tag was so that we could target this p element
    //Target the id of the p element by using querySelector and change it's innerHTML to be equal to your object getter
    //Add your code below

}