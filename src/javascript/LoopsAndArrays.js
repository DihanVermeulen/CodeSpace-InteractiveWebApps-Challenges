//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below
let tasks = ['eat', 'swim', 'study', 'sleep', 'workout', 'work', 'relax', 'jump', 'call', 'backflip'];

for (x of tasks) {
    console.log(x);
}

//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below
(function () {
    let y = 0;
    for (x in tasks) {
        x = parseInt(x);
        y = x + y;
        console.log(y);
    }
}
)();

//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below
(function () {
    let y = 0;
    for (x in tasks) {
        x = parseInt(x);
        y = x * 15;
        console.log(y);
    }
}
)();

//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below
(function () {
    let y = 0;
    let timesTable = [];
    for (x in tasks) {
        x = parseInt(x);
        y = x * 15;
        timesTable.push(y);
    }
    console.log(timesTable);
}
)();

//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below


//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below


//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below