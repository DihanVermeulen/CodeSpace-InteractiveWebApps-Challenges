class Tasks {
    constructor() {
        this._todos = []
    }

    get task() {
        return this._todos
    }

    set taskTitle(text) {
        if (isNaN(text)) {
            this._todos = text;
        } else {
            console.log('You must assign a string to your task title');
        }
    }

    //Add a method called addTasks with a parameter of taskName
    //create a variable within this function that adds the value of the parameter method into the returned array of the task getter


}
const object = new Tasks()

function newTask(event) {
    event.preventDefault()

    let value = document.getElementById('task').value

    //Call the addTask method and set it's argument to the "value" variable provided above
    //Add your code below


    //Output your object getter of task as an innerHtml of your empty p element
    //Add your code below


}