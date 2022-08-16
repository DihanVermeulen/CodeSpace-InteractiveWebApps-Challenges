function taskFormValidation(event) {
    event.preventDefault();
    let taskError = document.querySelector(".error");
    let card = document.querySelector(".card");
    let taskList = document.querySelector("#taskList");
    let task = document.querySelector("#taskInput").value;
    let checkTask = task.includes("<") || task.includes(">") ? true : false;
    if(checkTask) {
        taskError.style.display = "block";
        card.style.filter = "drop-shadow(0 0 0.75rem red)";
    }
    else {
        console.log(checkTask);
        taskError.style.display = "none";
        card.style.filter = "drop-shadow(0 0 0.75rem lightskyblue)";
        let li = document.createElement("li");
        let text = document.createTextNode(task);
        li.appendChild(text);
        taskList.appendChild(li)
    }
}