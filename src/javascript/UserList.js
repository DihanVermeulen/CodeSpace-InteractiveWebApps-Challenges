let userDatabase = ["John", "Mary", "Alfred", "Brandon", "Peter", "Roxanne", "Chanelle", "Adrian", "Will", "Elle"];
let selection = parseInt(prompt("Menu \n =============================== \n What would you like to do? \n 1) Add three users \n 2)Remove user \n 3)Display all users \n 4)Sort users"));
let output = document.querySelector("#_output");

switch(selection) {
    case 1 : alert("You chose 1"); break;
    case 3 : displayAllUsers(); break;
}

function displayAllUsers() {
    output.innerHTML = userDatabase;
}