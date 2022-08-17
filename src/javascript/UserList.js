let output = document.querySelector("#_output");

function selectOption() {
    let userDatabase = ["John", "Mary", "Alfred", "Brandon", "Peter", "Roxanne", "Chanelle", "Adrian", "Will", "Elle"];
    let selection = parseInt(prompt("Menu \n =============================== \n What would you like to do? \n 1) Add three users \n 2)Remove user \n 3)Display all users \n 4)Sort users"));
    switch (selection) {
        case 1: for (x = 1; x <= 3; x++) {
            let x = prompt("Type user name");
            userDatabase.push(x.toString());
        };
            displayAllUsers(userDatabase);
            break;
        case 2: userDatabase.pop();
            displayAllUsers(userDatabase);
            break;
        case 3: displayAllUsers(userDatabase);
            break;
        case 4: userDatabase.sort();
            displayAllUsers(userDatabase);
            break;
        default: alert("Sorry, that option is unknown");
    }
}

function displayAllUsers(arr) {
    output.innerHTML = arr;
}