document.querySelector("#_process").onclick = function () {
    let input = document.querySelector("#_number").value; 
    let output = document.querySelector("#_output");
    if(!isNaN(input)) {
        if(input % 2 == 0) {
            output.innerHTML = "Even";
        }
        else {
            output.innerHTML = "Odd";
        }
    }
    else {
        alert("Not a number or invalid number")
        input.reset();
    }
}